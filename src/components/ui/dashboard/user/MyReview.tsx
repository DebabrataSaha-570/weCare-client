import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import { useGetSingleTestimonialQuery } from "../../../../redux/features/weCare/weCare.api";
import { useAppSelector } from "../../../../redux/hook";
import { useUserRole } from "../../../hooks/getUserRole";
import Container from "../../Container";

const MyReview = () => {
  const userRole = useUserRole();
  const auth = useAppSelector((state) => state.auth);

  const userEmail = auth.user?.email;
  console.log(userEmail);

  const { data, isError, isLoading } = useGetSingleTestimonialQuery(userEmail);

  console.log(data);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg "></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h2 className="text-red-500">Something went wrong</h2>;
      </div>
    );
  }

  return (
    <>
      {userRole === "user" ? (
        <Container>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold">My Review</h2>
            {!data && (
              <h2 className="text-xl mt-5">
                Your input is valuable. Please consider adding a review to help
                others and enhance our services.
              </h2>
            )}
          </div>

          {data && (
            <div className="p-5 bg-[--color2] shadow-xl rounded-md w-96 mt-5">
              <div className="flex gap-5 items-start">
                <div className="avatar">
                  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={data.image} />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{data.name}</h2>
                  <h3 className="text-md font-semibold">{data.designation}</h3>
                </div>
              </div>

              <h3 className="mt-4 font-semibold">
                Donation: {data.supply} {data.quantity} {data.unit}
              </h3>

              <h4>{data.testimonial}</h4>

              <div className="text-right space-x-5">
                <button className="btn btn-sm btn-secondary">
                  {" "}
                  <FaPenToSquare />
                </button>
                <button className="btn btn-sm btn-error">
                  <FaTrashCan />
                </button>
              </div>
            </div>
          )}
        </Container>
      ) : (
        <h2>Page Not Found.</h2>
      )}
    </>
  );
};

export default MyReview;
