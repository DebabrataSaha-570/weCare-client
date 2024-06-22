import { useForm, SubmitHandler } from "react-hook-form";
import { useAddVolunteerMutation } from "../../../redux/features/weCare/weCare.api";
import { useEffect } from "react";
import toast from "react-hot-toast";

type FormInputs = {
  userFullName: string;
  volunteerLastName: string;
  volunteerEmail: string;
  volunteerNumber: number;
  volunteerAddress: string;
  volunteerPhoto: string;
  volunteerPostalCode: number;
  volunteerLinkedin: string;
  volunteerRole: string;
  volunteerComments: string;
};

const DashboardMyProfile = () => {
  const [addVolunteer, { data, isLoading, isError }] =
    useAddVolunteerMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      volunteerRole: "",
    },
  });

  const handleCancel = () => {
    reset();
  };

  const handleFormSubmit: SubmitHandler<FormInputs> = (formData) => {
    console.log("form data", formData);
    addVolunteer(formData);
  };

  useEffect(() => {
    if (data) {
      toast.success("Registration Completed Successfully");
      reset();
    } else if (isError) {
      toast.error("Something Went wrong");
    }
  }, [data, isError, reset]);
  return (
    <section className="px-0 md:px-5">
      <div>
        <h3 className="text-center text-3xl font-semibold mb-5">My Profile</h3>
      </div>

      <div className="h-28 bg-gradient-to-r from-primary to-[--color1]  w-full rounded-md"></div>
      <div className="flex items-center gap-5">
        <div className="avatar mt-[-35px] ml-[10px] ">
          <div className="w-28  shadow-lg rounded-full ring ring-gray-200  ring-offset-gray-200 ring-offset-[3px]">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-semibold">User Name</h2>
          <h4 className="text-sm  font-semibold text-[--color6]">
            Update Your Photo and Personal Details
          </h4>
        </div>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-5 w-full ">
        <div className="flex-0 md:flex items-center gap-10">
          <label className="form-control w-full ">
            <div className="label">
              <span className="text-lg font-semibold">Full Name :</span>
            </div>
            <input
              type="text"
              {...register("userFullName", { required: true })}
              placeholder="Type here"
              className=" p-2 border border-[--color5]  rounded-md w-full bg-transparent"
            />
            {errors.userFullName && (
              <span className="text-red-500">Full Name is required</span>
            )}
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="text-lg font-semibold">Email :</span>
            </div>
            <input
              type="email"
              {...register("volunteerEmail", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email",
                },
              })}
              placeholder="example@gmail.com"
              className=" p-2 border border-[--color5]  rounded-md w-full bg-transparent"
            />
            {errors.volunteerEmail && (
              <span className="text-red-500">
                {errors.volunteerEmail?.message}
              </span>
            )}
          </label>
        </div>

        <div className="flex-0 md:flex items-center gap-10 mt-3">
          <label className="form-control w-full ">
            <div className="label">
              <span className="text-lg font-semibold">Phone Number :</span>
            </div>
            <input
              type="number"
              {...register("volunteerNumber", { required: true })}
              placeholder="+88015555555"
              className=" p-2 border border-[--color5]  rounded-md w-full bg-transparent"
            />
            {errors.volunteerNumber && (
              <span className="text-red-500">Phone Number is required</span>
            )}
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="text-lg font-semibold">Address :</span>
            </div>
            <input
              type="text"
              {...register("volunteerAddress", { required: true })}
              placeholder="Thana, Upozila, Zila"
              className=" p-2 border border-[--color5]  rounded-md w-full bg-transparent"
            />
            {errors.volunteerAddress && (
              <span className="text-red-500">Address is required</span>
            )}
          </label>
        </div>

        <div className="flex-0 md:flex items-center gap-10 mt-3  mb-5">
          <label className="form-control w-full ">
            <div className="label">
              <span className="text-lg font-semibold">Linkedin Account :</span>
            </div>
            <input
              type="text"
              {...register("volunteerLinkedin", { required: true })}
              placeholder="https://www.linkedin.com/feed/"
              className=" p-2 border border-[--color5]  rounded-md w-full bg-transparent"
            />
            {errors.volunteerLinkedin && (
              <span className="text-red-500">Linkedin Account is required</span>
            )}
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="text-lg font-semibold">Photo Url :</span>
            </div>
            <input
              type="text"
              {...register("volunteerPhoto", { required: true })}
              placeholder="https://pqrst.org/IwfNREx.png"
              className=" p-2 border border-[--color5]  rounded-md w-full bg-transparent"
            />
            {errors.volunteerPhoto && (
              <span className="text-red-500">Photo is required</span>
            )}
          </label>
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={handleCancel}
            type="button"
            className="items-center  text-base font-semibold bg-transparent px-5 py-2  border-2 border-[--color1]   hover:bg-[--color1] hover:text-[--color4] transition duration-500   rounded-md"
          >
            Cancel
          </button>

          {isLoading ? (
            <button className="btn">
              <span className="loading loading-spinner"></span>
              loading
            </button>
          ) : (
            <button
              type="submit"
              className="flex items-center justify-center  text-[--color4] font-semibold  text-base bg-primary px-5 py-2 hover:bg-[--color1] transition duration-700  focus:bg-[--color1] rounded-md "
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default DashboardMyProfile;
