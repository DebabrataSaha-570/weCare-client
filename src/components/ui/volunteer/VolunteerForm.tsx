import { useForm, SubmitHandler } from "react-hook-form";
import image from "../../../assets/hand_reaching_out_2.jpg";
import { useAddVolunteerMutation } from "../../../redux/features/weCare/weCare.api";
import { useEffect } from "react";
import toast from "react-hot-toast";

type FormInputs = {
  volunteerFirstName: string;
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

const VolunteerForm = () => {
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
    <section className="flex  w-full md:h-screen bg-[--color2]  rounded-md text-quickSand">
      <div className="hidden md:flex md:flex-1 relative">
        <img
          src={image}
          className="object-cover  w-full h-full"
          alt="registration_image"
        />

        <div className="absolute top-1 left-4  text-[--color3]">
          <div className=" text-2xl font-bold mb-3">
            <h2>Empowerment </h2>
            <h2>Through Service</h2>
          </div>

          <div className="text-base font-semibold">
            <p>Unite, Serve, Impact:</p>
            <p>Your Chance to give back</p>
          </div>
        </div>
      </div>

      <div className="p-5 flex-[2]">
        <div className="">
          <h2 className="text-primary text-2xl font-bold">
            Volunteer Registration
          </h2>
        </div>
        <p className="font-semibold text-base">
          Thank You for Your interest in voluteering with us! Please fill out
          the form below to sign up.
        </p>

        {/* form starts here  */}

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="mt-5 w-full "
        >
          <div className="flex-0 md:flex items-center gap-10">
            <label className="form-control w-full ">
              <div className="label">
                <span className="text-lg font-semibold">First Name :</span>
              </div>
              <input
                type="text"
                {...register("volunteerFirstName", { required: true })}
                placeholder="Type here"
                className=" p-2 border border-gray-400  rounded-md w-full "
              />
              {errors.volunteerFirstName && (
                <span className="text-red-500">First Name is required</span>
              )}
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="text-lg font-semibold">Last Name :</span>
              </div>
              <input
                type="text"
                {...register("volunteerLastName", { required: true })}
                placeholder="Type here"
                className=" p-2 border border-gray-400  rounded-md w-full "
              />
              {errors.volunteerLastName && (
                <span className="text-red-500">Last Name is required</span>
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
                className=" p-2 border border-gray-400  rounded-md w-full "
              />
              {errors.volunteerEmail && (
                <span className="text-red-500">
                  {errors.volunteerEmail?.message}
                </span>
              )}
            </label>
          </div>

          <div className="flex-0 md:flex items-center gap-10 my-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="text-lg font-semibold">Phone Number :</span>
              </div>
              <input
                type="number"
                {...register("volunteerNumber", { required: true })}
                placeholder="+88015555555"
                className=" p-2 border border-gray-400  rounded-md w-full"
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
                className=" p-2 border border-gray-400  rounded-md w-full "
              />
              {errors.volunteerAddress && (
                <span className="text-red-500">Address is required</span>
              )}
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="text-lg font-semibold">Postal Code :</span>
              </div>
              <input
                type="number"
                {...register("volunteerPostalCode", { required: true })}
                placeholder="3821"
                className=" p-2 border border-gray-400  rounded-md w-full "
              />
              {errors.volunteerPostalCode && (
                <span className="text-red-500">Postal Code is required</span>
              )}
            </label>
          </div>

          <div className="flex-0 md:flex items-center gap-10">
            <label className="form-control w-full ">
              <div className="label">
                <span className="text-lg font-semibold">
                  Linkedin Account :
                </span>
              </div>
              <input
                type="text"
                {...register("volunteerLinkedin", { required: true })}
                placeholder="https://www.linkedin.com/feed/"
                className=" p-2 border border-gray-400  rounded-md w-full "
              />
              {errors.volunteerLinkedin && (
                <span className="text-red-500">
                  Linkedin Account is required
                </span>
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
                className=" p-2 border border-gray-400  rounded-md w-full"
              />
              {errors.volunteerPhoto && (
                <span className="text-red-500">Photo is required</span>
              )}
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="text-lg font-semibold">
                  Preferred Volunteer Role :
                </span>
              </div>
              <select
                // onChange={(e) => setQuantityUnit(e.target.value)}
                className=" rounded-md p-2  border border-gray-400 w-full"
                {...register("volunteerRole", { required: true })}
              >
                <option value="" disabled selected>
                  Select Role
                </option>
                <option value="Event Setup">Event Setup</option>
                <option value="Registration Desk">Registration Desk</option>
                <option value="Food Service">Food Service</option>
                <option value="Clean Up">Clean-up Crew</option>
              </select>
              {errors.volunteerRole && (
                <span className="text-red-500">volunteerRole is required</span>
              )}
            </label>
          </div>

          <label className="form-control w-full  my-5">
            <div className="label">
              <span className="text-lg font-semibold">
                Additional Comments :
              </span>
            </div>
            <textarea
              {...register("volunteerComments", { required: true })}
              rows={3}
              placeholder="Description"
              className=" rounded-md p-2  border border-gray-400 w-full"
            ></textarea>
            {errors.volunteerComments && (
              <span className="text-red-500">
                Additional Comments is required
              </span>
            )}
          </label>

          <div className="flex items-center gap-5">
            <button
              onClick={handleCancel}
              type="button"
              className="items-center  text-base font-semibold bg-transparent px-5 py-2  border-2 border-[--color1]   hover:bg-[--color1] hover:text-white transition duration-500   rounded-md"
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
                className="flex items-center justify-center  text-white font-semibold  text-base bg-primary px-5 py-2     hover:bg-[--color1] transition duration-700  focus:bg-[--color1] rounded-md "
              >
                Signup
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default VolunteerForm;
