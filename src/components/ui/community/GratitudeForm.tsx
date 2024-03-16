import { useForm, SubmitHandler } from "react-hook-form";
import { useAddGratitudeMutation } from "../../../redux/features/weCare/weCare.api";
import { useEffect } from "react";
import toast from "react-hot-toast";

type FormInputs = {
  Name: string;
  Email: string;
  Address: string;
  Image: string;
  Comments: string;
};

const GratitudeForm = () => {
  const [addGratitude, { data, isLoading, isError }] =
    useAddGratitudeMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const handleCancel = () => {
    reset();
  };

  const handleFormSubmit: SubmitHandler<FormInputs> = (formData) => {
    addGratitude(formData);
  };

  useEffect(() => {
    if (data) {
      toast.success("Gratitude Added Successfully");
      reset();
    } else if (isError) {
      toast.error("Something Went wrong");
    }
  }, [data, isError, reset]);

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="p-6 shadow-lg bg-[--color2] rounded-lg"
      >
        <h3 className="text-center text-xl text-primary font-bold">
          Gratitude Form
        </h3>
        <label className="form-control w-full ">
          <div className="label">
            <span className="text-lg font-semibold">Name :</span>
          </div>
          <input
            type="text"
            {...register("Name", { required: true })}
            placeholder="write your Name here"
            className=" p-2 border border-[--color5]  rounded-md w-full bg-transparent"
          />
          {errors.Name && (
            <span className="text-red-500"> Name is required</span>
          )}
        </label>

        <label className="form-control w-full ">
          <div className="label">
            <span className="text-lg font-semibold">Email :</span>
          </div>
          <input
            type="email"
            {...register("Email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid email",
              },
            })}
            placeholder="example@gmail.com"
            className=" p-2 border border-[--color5]  rounded-md w-full bg-transparent"
          />
          {errors.Email && (
            <span className="text-red-500">{errors.Email?.message}</span>
          )}
        </label>

        <label className="form-control w-full ">
          <div className="label">
            <span className="text-lg font-semibold">Address :</span>
          </div>
          <input
            type="text"
            {...register("Address", { required: true })}
            placeholder="Chowmuhani, Noakhali , Bangladesh"
            className=" p-2 border border-[--color5]  rounded-md w-full bg-transparent"
          />
          {errors.Address && (
            <span className="text-red-500">Address is required</span>
          )}
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="text-lg font-semibold">Image Url :</span>
          </div>
          <input
            type="text"
            {...register("Image", { required: true })}
            placeholder="https://pqrst.org/IwfNREx.png"
            className=" p-2 border border-[--color5]  rounded-md w-full bg-transparent "
          />
          {errors.Image && (
            <span className="text-red-500">Image Url is required</span>
          )}
        </label>

        <label className="form-control w-full  my-5">
          <div className="label">
            <span className="text-lg font-semibold">Comments :</span>
          </div>
          <textarea
            {...register("Comments", { required: true })}
            rows={3}
            placeholder="Description"
            className=" rounded-md p-2  border border-[--color5] w-full bg-transparent"
          ></textarea>
          {errors.Comments && (
            <span className="text-red-500">
              Additional Comments is required
            </span>
          )}
        </label>

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
              className="flex items-center justify-center  text-[--color4] font-semibold  text-base bg-primary px-5 py-2  hover:bg-[--color1] transition duration-700  rounded-md "
            >
              Add
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default GratitudeForm;
