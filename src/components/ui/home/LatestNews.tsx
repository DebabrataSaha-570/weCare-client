import { motion } from "framer-motion";
import Container from "../Container";
import NewsCard from "../NewsCard";
import SecondaryButton from "../SecondaryButton";
import { useGetNewsDataQuery } from "../../../redux/features/weCare/weCare.api";

type TSingleNews = {
  _id: string;
  img: string;
  date: string;
  title: string;
  category: string;
};

const LatestNews = () => {
  const { data } = useGetNewsDataQuery(null);
  console.log("latest news data", data);
  return (
    <Container className="p-6 my-24">
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
        className="text-center"
      >
        <h3 className="text-[--color1] text-2xl md:text-3xl mb-3 font-serif">
          What's New
        </h3>
        <h2 className="text-4xl font-semibold">Read Our Latest News</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6">
        {data?.map((singleNews: TSingleNews) => (
          <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>
        ))}
      </div>

      <div className="text-center">
        <SecondaryButton>All News</SecondaryButton>
      </div>
    </Container>
  );
};

export default LatestNews;
