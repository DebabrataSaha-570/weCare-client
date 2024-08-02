import Container from "../components/ui/Container";
import LeaderBoardTable from "../components/ui/leaderboard/LeaderBoardTable";
import { useGetFoodSuppliesQuery } from "../redux/features/weCare/weCare.api";

type TDonation = {
  title: string;
  donorName: string;
  donorImage?: string;
  quantity: {
    quantity: string;
    quantityUnit: string;
  };
};

type TDonorRankings = {
  title: string;
  donationUnit: string;
  donorName: string;
  totalDonation: number;
  image?: string;
};

const Leaderboard = () => {
  const { data, isError, isLoading } = useGetFoodSuppliesQuery("");
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

  const donorRankings: TDonorRankings[] = data?.map((donation: TDonation) => ({
    donorName: donation.donorName,
    title: donation.title,
    totalDonation: parseFloat(donation.quantity.quantity),
    donationUnit: donation.quantity.quantityUnit,
    image: donation.donorImage,
  }));

  donorRankings.sort((a, b) => b.totalDonation - a.totalDonation);

  return (
    <Container className="px-10 py-5">
      <div className="text-center my-5">
        <h5 className="text-[--color1] text-xl md:text-3xl mb-3 font-serif ">
          Top Donors Recognition
        </h5>

        <h2 className="text-3xl md:text-4xl font-semibold mb-5 ">
          Celebrating Generosity, Making Impact
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table  mt-5  px-10 rounded-md border">
          {/* head */}
          <thead className="bg-[#6B7280] text-base text-[--color8]  ">
            {/* <thead className="bg-[--thead] text-base text-[--color8] "> */}
            <tr className="">
              <th>Position</th>
              <th>Name</th>
              <th className="">Total Donation</th>
            </tr>
          </thead>

          <tbody className="">
            {donorRankings?.map((ranking, index) => (
              <LeaderBoardTable
                ranking={ranking}
                index={index}
              ></LeaderBoardTable>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Leaderboard;
