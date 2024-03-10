import { useGetFoodSuppliesQuery } from "../../../redux/features/weCare/weCare.api";
import Container from "../Container";
import ProductCard from "../ProductCard";

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
  donorEmail: string;
};

const AllSupplies = () => {
  const { data, isError, isLoading } = useGetFoodSuppliesQuery(null);

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
    <Container className="my-4 p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-semibold">All Supply Items</h2>

        <select className="select select-bordered w-full max-w-[13rem] bg-gray-600 text-white font-bold">
          <option disabled selected>
            Filter
          </option>
          <option value="Food">Food</option>
          <option value="Hygiene">Hygiene Products</option>
          <option value="Baby">Baby Essentials</option>
          <option value="">All</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7 justify-items-center gap-5">
        {data?.map((supply: TSupply) => (
          <ProductCard key={supply?._id} supply={supply}></ProductCard>
        ))}
      </div>
    </Container>
  );
};

export default AllSupplies;
