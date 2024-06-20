import { GoArrowRight } from "react-icons/go";
import { useGetFoodSuppliesQuery } from "../../../redux/features/weCare/weCare.api";
import { Link } from "react-router-dom";

type TSupply = {
  _id: string;
  title: string;
  category: string;
  quantity: {
    quantity: string;
    quantityUnit: string;
  };
  description: string;
  image: string;
  donorName: string;
  donorAddress: string;
};

const RecentDonations = () => {
  const {
    data: donationData,
    isError,
    isLoading,
  } = useGetFoodSuppliesQuery("");
  console.log(donationData);

  const lastFiveItems = donationData?.slice(-5);

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
        <h2 className="text-xl font-semibold">Recent Donations</h2>
        <Link
          to="/dashboard/all-donation"
          className="text-sm text-gray-500 flex items-center gap-2"
        >
          View All <GoArrowRight />{" "}
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead className="text-base font-semibold text-black">
            <tr>
              <th>#</th>
              <th>Item</th>
              <th className="">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {lastFiveItems.map((item: TSupply, index: number) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td className="flex items-center justify-start">
                  <img
                    className="w-20 bg-[--color2]"
                    src={item.image}
                    alt={item.title}
                  />
                  <h3>{item.title}</h3>
                </td>
                <td>
                  {item.quantity.quantity} {item.quantity.quantityUnit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentDonations;
