import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect } from "react";

import { useUserRole } from "../../../hooks/getUserRole";
import { useCreateTestimonialMutation } from "../../../../redux/features/weCare/weCare.api";
import { useAppSelector } from "../../../../redux/hook";

type FormInputs = {
  name: string;
  email: string;
  designation: string;
  image: string;
  supply: string;
  quantity: number;
  unit: string;
  testimonial: string;
};

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm<FormInputs>();
  const [addTestimonials, { data, isLoading, isError }] =
    useCreateTestimonialMutation();

  const handleFormSubmit: SubmitHandler<FormInputs> = (formData) => {
    addTestimonials(formData);
  };

  useEffect(() => {
    if (data) {
      toast.success("Testimonials Added Successfully");
      reset();
    } else if (isError) {
      toast.error("Something Went wrong");
    }
  }, [data, isError, reset]);

  const userRole = useUserRole();
  const auth = useAppSelector((state) => state.auth);
  const userName = auth.user ? auth.user.name : "";
  const userEmail = auth.user ? auth.user.email : "";
  return (
    <>
      {userRole === "user" ? (
        <div>
          <h3 className="text-center text-3xl font-semibold">Add Review</h3>

          <div className="w-full md:max-w-[50%] mx-auto">
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="flex flex-col gap-4  mt-6 p-6 bg-[--create_form] rounded-lg shadow-md "
            >
              <input
                type="text"
                placeholder="Donor Name"
                defaultValue={userName}
                {...register("name", { required: true })}
                className=" rounded-md p-3 focus:ring focus:ring-[--color6] border border-[--color8] w-full "
                required
              />
              <input
                type="text"
                placeholder="Donor Email"
                defaultValue={userEmail}
                {...register("email", { required: true })}
                className=" rounded-md p-3 focus:ring focus:ring-[--color6] border border-[--color8] w-full "
                required
              />

              <input
                type="text"
                placeholder="Donor Designation"
                {...register("designation", { required: true })}
                className=" rounded-md p-3 focus:ring focus:ring-[--color6] border  border-[--color8] w-full"
                required
              />

              <input
                type="text"
                placeholder="Donor Image URL"
                {...register("image", { required: true })}
                className=" rounded-md p-3 focus:ring focus:ring-[--color6] border  border-[--color8] w-full"
                required
              />

              <input
                type="text"
                placeholder="Supply Item"
                {...register("supply", { required: true })}
                className=" rounded-md p-3 focus:ring focus:ring-[--color6] border  border-[--color8] w-full"
                required
              />

              <div className="flex gap-5">
                <input
                  type="number"
                  placeholder="Quantity "
                  {...register("quantity", { required: true })}
                  className=" rounded-md p-3 focus:ring focus:ring-[--color6] border  border-[--color8] w-full"
                />
                <select
                  className=" rounded-md p-3 focus:ring focus:ring-[--color6] border  border-[--color8] w-full"
                  {...register("unit", { required: true })}
                >
                  <option disabled>Select Units</option>
                  <option value="kg">Kg</option>
                  <option value="litre">litre</option>
                  <option value="Pcs">Pcs</option>
                </select>
              </div>

              <textarea
                placeholder="Testimonial"
                {...register("testimonial", { required: true })}
                rows={3}
                className=" rounded-md p-3 focus:ring focus:ring-[--color6] border  border-[--color8]  w-full "
                required
              ></textarea>

              {isLoading ? (
                <button className="btn">
                  <span className="loading loading-spinner"></span>
                  loading
                </button>
              ) : (
                <button type="submit" className="btn btn-secondary">
                  Add item
                </button>
              )}
            </form>
          </div>
        </div>
      ) : (
        <h2>Page Not Found.</h2>
      )}
    </>
  );
};

export default AddReview;
