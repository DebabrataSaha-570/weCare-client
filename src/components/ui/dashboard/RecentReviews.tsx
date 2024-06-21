import { GoArrowRight } from "react-icons/go";
import { useGetTestimonialsDataQuery } from "../../../redux/features/weCare/weCare.api";
import { Link } from "react-router-dom";

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

const RecentReviews = ({ showViewAll }: { showViewAll: boolean }) => {
  const {
    data: testimonialsData,
    isError,
    isLoading,
  } = useGetTestimonialsDataQuery("");
  console.log(testimonialsData);

  const lastFiveReviews = testimonialsData?.slice(-5);

  if (isLoading) {
    return (
      <div className="w-full  flex justify-center items-center">
        <span className="loading loading-bars loading-lg "></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h2 className="text-red-500 text-xl">Something went wrong</h2>
      </div>
    );
  }

  return (
    <div className="border border-gray-300 rounded-md ">
      <div className="flex justify-between items-center border-b border-gray-300 p-3">
        <h2 className="text-xl font-semibold">Recent Reviews</h2>
        {showViewAll && (
          <Link
            to="/dashboard/reviews"
            className="text-sm text-gray-500 flex items-center gap-2"
          >
            View All <GoArrowRight />{" "}
          </Link>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead className="text-base font-semibold text-black">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th className="">Designation</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {lastFiveReviews.map((review: TTestimonial, index: number) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td className="flex-0 space-y-2 md:flex md:space-y-0 items-center justify-start gap-2">
                  <img
                    className="w-10 md:w-16 lg:w-20 bg-[--color2]"
                    src={review.image}
                    alt={review.name}
                  />
                  <h3>{review.name}</h3>
                </td>
                <td>{review.designation}</td>
                <td>{review.testimonial}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentReviews;
