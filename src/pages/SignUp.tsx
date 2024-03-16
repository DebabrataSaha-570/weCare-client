import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Container from "../components/ui/Container";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useSignUpMutation } from "../redux/features/auth/authApi";
import toast from "react-hot-toast";
import { useEffect } from "react";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const [createUser, { data, error, isLoading, isError }] = useSignUpMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const handleFormSubmit: SubmitHandler<FormInputs> = (data) => {
    createUser(data);
  };

  useEffect(() => {
    if (data?.success) {
      toast.success("User registered successfully. Please Login");
      navigate("/login");
    } else if (isError) {
      toast.error("Something Went Wrong");
    }
  }, [data, error, isError, navigate]);

  return (
    <Container className="h-[80vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="card bg-[--card_background] w-96 shadow-xl"
      >
        <h3 className="text-center text-3xl  mb-3  font-serif pt-6">Sign Up</h3>
        <div className="card-body ">
          <label className="input border border-[--color6] flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              {...register("name", {
                required: "Name is required",
              })}
            />
          </label>
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}

          <label className="input border border-[--color6] focus:outline-none flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email",
                },
              })}
            />
          </label>
          {errors.email && (
            <span className="text-red-500">{errors.email?.message}</span>
          )}
          <label className="input border border-[--color6] flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}

          {isLoading ? (
            <div className="text-center">
              <span className="loading loading-spinner loading-lg "></span>
            </div>
          ) : (
            <PrimaryButton type="submit">SignUp</PrimaryButton>
          )}
          <p className="text-center font-medium">
            Already have an account?{" "}
            <Link className="text-primary" to="/login">
              Login
            </Link>
          </p>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
