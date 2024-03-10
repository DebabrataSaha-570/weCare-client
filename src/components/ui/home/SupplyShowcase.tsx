import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../Container";
import SecondaryButton from "../SecondaryButton";
import ProductCard from "../ProductCard";
import { useGetFoodSuppliesQuery } from "../../../redux/features/weCare/weCare.api";

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

const SupplyShowcase = () => {
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
    <Container className="p-4 my-24">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-center mb-10"
      >
        <h5 className="text-[--color1] text-2xl md:text-3xl mb-3 font-serif ">
          Show Case
        </h5>
        <h2 className="text-4xl font-semibold">View Top Supply Items</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 justify-items-center px-3">
        {data.slice(0, 6).map((supply: TSupply, index: number) => (
          <motion.div
            key={supply._id}
            initial={{ opacity: 0, translateY: -50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", duration: 0.5 },
            }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProductCard supply={supply}></ProductCard>
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <Link to="/all-supplies">
          <SecondaryButton>View All Items</SecondaryButton>
        </Link>
      </div>
    </Container>
  );
};

export default SupplyShowcase;
