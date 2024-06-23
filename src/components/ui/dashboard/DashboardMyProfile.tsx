import { useForm, SubmitHandler } from "react-hook-form";
import {
  useGetSingleUserInfoQuery,
  useUpdateSingleUserInfoMutation,
} from "../../../redux/features/weCare/weCare.api";
import { useAppSelector } from "../../../redux/hook";
import toast from "react-hot-toast";
import { useState } from "react";

type FormInputs = {
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
  photo: string;

  password: string;
};

const DashboardMyProfile = () => {
  const auth = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  const userEmail = auth.user?.email;

  const { data, isLoading } = useGetSingleUserInfoQuery(userEmail);
  const [updateUserInfo, response] = useUpdateSingleUserInfoMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({});

  const handleCancel = () => {
    reset();
  };

  const handleFormSubmit: SubmitHandler<FormInputs> = async (formData) => {
    console.log("form data", formData);
    setLoading(true);
    try {
      await updateUserInfo(formData);
      toast.success("User info updated successfully!");
      console.log(response);
      setLoading(false);
      reset();
    } catch (error) {
      toast.error("Something went wrong!");
      setLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg "></span>
      </div>
    );
  }

  return (
    <section className="px-0 md:px-5">
      <div>
        <h3 className="text-center text-3xl font-semibold mb-5">My Profile</h3>
      </div>

      <div className="h-28 bg-gradient-to-r from-primary to-[--color1]  w-full rounded-md"></div>
      <div className="flex items-center gap-5">
        <div className="avatar mt-[-35px] ml-[10px] ">
          {data?.photo && (
            <div className="w-28  shadow-lg rounded-full ring ring-gray-200  ring-offset-gray-200 ring-offset-[3px]">
              <img src={data.photo} />
            </div>
          )}
          {!data?.photo && (
            <div className="w-28  shadow-lg rounded-full ring ring-gray-200  ring-offset-gray-200 ring-offset-[3px]">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          )}
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-semibold">
            {data?.name || "User Name"}
          </h2>
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
              defaultValue={data?.name}
              {...register("name", { required: true })}
              placeholder="Type here"
              className=" p-2 border border-[--color5]  rounded-md w-full bg-transparent"
            />
            {errors.name && (
              <span className="text-red-500">Full Name is required</span>
            )}
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="text-lg font-semibold">Email :</span>
            </div>
            <input
              type="email"
              value={data?.email}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email",
                },
              })}
              placeholder="example@gmail.com"
              className=" p-2 border border-[--color5]  rounded-md w-full bg-transparent"
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
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
              defaultValue={data.phoneNumber || ""}
              {...register("phoneNumber", { required: true })}
              placeholder="+88015555555"
              className=" p-2 border border-[--color5]  rounded-md w-full bg-transparent"
            />
            {errors.phoneNumber && (
              <span className="text-red-500">Phone Number is required</span>
            )}
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="text-lg font-semibold">Address :</span>
            </div>
            <input
              type="text"
              defaultValue={data.address || ""}
              {...register("address", { required: true })}
              placeholder="Thana, Upozila, Zila"
              className=" p-2 border border-[--color5]  rounded-md w-full bg-transparent"
            />
            {errors.address && (
              <span className="text-red-500">Address is required</span>
            )}
          </label>
        </div>

        <div className="flex-0 md:flex items-center gap-10 mt-3  mb-5">
          <label className="form-control w-full ">
            <div className="label">
              <span className="text-lg font-semibold">Password :</span>
            </div>
            {userEmail === "admin@gmail.com" ||
            userEmail === "emilyjohnson777@gmail.com" ? (
              <input
                type="text"
                {...register("password", { required: true, disabled: true })}
                placeholder="update your password (except emily, admin, super admin)"
                className=" p-2 border border-[--color5]  rounded-md w-full bg-transparent"
              />
            ) : (
              <input
                type="text"
                {...register("password", { required: true })}
                placeholder="update your password (except emily, admin, super admin)"
                className=" p-2 border border-[--color5]  rounded-md w-full bg-transparent"
              />
            )}
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="text-lg font-semibold">Photo Url :</span>
            </div>
            <input
              type="url"
              {...register("photo", { required: true })}
              placeholder="https://pqrst.org/IwfNREx.png"
              className=" p-2 border border-[--color5]  rounded-md w-full bg-transparent"
            />
            {errors.photo && (
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

          {loading ? (
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
