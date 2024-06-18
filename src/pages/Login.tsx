import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Container from "../components/ui/Container";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import toast from "react-hot-toast";

type FormInputs = {
  email: string;
  password: string;
};

// interface TErrorMessage {
//   status?: number;
//   data?: {
//     message: string;
//   };
// }

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loginUser, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormInputs>();

  const handleFormSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const res = await loginUser(data).unwrap();
      const user = verifyToken(res.token) as TUser;
      dispatch(setUser({ user: user, token: res.token }));
      toast.success("User logged In successfully");
      navigate("/dashboard");
    } catch (error) {
      // const errorMessage = error as TErrorMessage;
      // toast.error(errorMessage);
      toast.error("Invalid email or password");
    }
  };

  const handleCopyCredentials = (email: string, password: string) => {
    setValue("email", email);
    setValue("password", password);
  };

  return (
    <Container className="my-20 flex flex-col md:flex-row gap-5 items-center  justify-around">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="card  bg-[--color2] w-96 shadow-xl"
      >
        <h3 className="text-center text-3xl  mb-3  font-serif pt-6">Login</h3>
        <div className="card-body ">
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
            <PrimaryButton type="submit">Login</PrimaryButton>
          )}

          <p className="text-center font-medium">
            New to weCare?{" "}
            <Link className="text-primary" to="/signUp">
              Create Account
            </Link>
          </p>
        </div>
      </form>

      <section className="my-5">
        <div className="card w-96 bg-[--card_background]  shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Admin Login Credentials</h2>
            <h3>
              {" "}
              <span className="font-bold">Email :</span> admin@gmail.com{" "}
            </h3>
            <h3>
              {" "}
              <span className="font-bold">Password :</span> admin123456{" "}
            </h3>
            <button
              onClick={() =>
                handleCopyCredentials("admin@gmail.com", "admin123456")
              }
              className="btn btn-primary rounded-full text-white"
            >
              Copy Credentials
            </button>
          </div>
        </div>
        <div className="card w-96 bg-[--card_background] shadow-xl my-5">
          <div className="card-body">
            <h2 className="card-title">User Login Credentials</h2>
            <h3>
              {" "}
              <span className="font-bold">Email :</span>{" "}
              emilyjohnson777@gmail.com{" "}
            </h3>
            <h3>
              {" "}
              <span className="font-bold">Password :</span> 123456{" "}
            </h3>

            <button
              onClick={() =>
                handleCopyCredentials("emilyjohnson777@gmail.com", "123456")
              }
              className="btn btn-primary rounded-full text-white"
            >
              Copy Credentials
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Login;
