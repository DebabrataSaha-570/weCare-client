import { FaTrashAlt } from "react-icons/fa";
import { useGetTestimonialsDataQuery } from "../../../../redux/features/weCare/weCare.api";
import { useUserRole } from "../../../hooks/getUserRole";
import Container from "../../Container";
import toast from "react-hot-toast";

type TTestimonial = {
  _id: string;
  name: string;
  email: string;
  designation: string;
  image: string;
  supply: string;
  quantity: string;
  unit: string;
  testimonial: string;
};

const AllReviews = () => {
  const userRole = useUserRole();

  const { data, isError, isLoading } = useGetTestimonialsDataQuery("");

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

  const handleDelete = (id: string) => {
    console.log(id);
    toast.error("Only super admin can delete this!");
  };

  return (
    <>
      {userRole === "admin" ? (
        <Container>
          <div className="flex justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold">All Reviews</h2>
          </div>

          <div>
            <div className="overflow-x-auto rounded-lg shadow-sm mt-6">
              <table className="table border">
                {/* head */}
                <thead className="bg-[--thead] text-base text-gray-300">
                  <tr className="">
                    <th></th>
                    <th className="">Name</th>
                    <th className="">Designation</th>

                    <th>Email</th>
                    <th>Review</th>
                    <th className="">Actions</th>
                  </tr>
                </thead>
                <tbody className="">
                  {data.map((review: TTestimonial, index: number) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td className=" gap-2">
                        <img
                          className="w-10 md:w-16 lg:w-20"
                          src={review.image}
                          alt=""
                        />
                        <p> {review.name}</p>
                      </td>
                      <td>{review.designation}</td>
                      <td>{review.email}</td>
                      <td>{review.testimonial}</td>
                      <td>
                        {" "}
                        <button
                          onClick={() => handleDelete(review._id)}
                          className="btn btn-sm btn-error"
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      ) : (
        <h2>Page Not Found.</h2>
      )}
    </>
  );
};

export default AllReviews;
