import { motion } from "framer-motion";
import { IoPersonOutline, IoShareSocialSharp } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
type TSingleNews = {
  _id: string;
  img: string;
  date: string;
  title: string;
  category: string;
};

type cardProps = {
  singleNews: TSingleNews;
};
const NewsCard = ({ singleNews }: cardProps) => {
  const { img, date, title, category } = singleNews;
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      // viewport={{ once: true }}
      transition={{
        delay: 0.4,
        y: { type: "spring", stiffness: 60 },
        opacity: { duration: 0.2 },
        ease: "easeIn",
        duration: 1,
      }}
      className="bg-[--color2] p-3 rounded-lg shadow-lg mb-5"
    >
      <div className="relative">
        <LazyLoadImage
          className=" w-full  object-cover rounded-lg mx-auto h-[300px] "
          src={img}
          effect="blur"
          alt={title}
        />

        <p className="text-sm absolute top-4 left-5 bg-primary px-3 rounded-full font-semibold text-white py-1">
          {category}
        </p>
      </div>

      <div className="p-6">
        <h3 className="text-primary text-lg font-serif mb-3">{date}</h3>

        <h2 className="text-2xl font-semibold hover:text-[--color1] cursor-pointer drop-shadow-md transition duration-500 ">
          {title}
        </h2>
        <hr className="mt-5 border border-gray-200" />
      </div>

      <div className="px-6 flex justify-between items-center cursor-pointer">
        <div className="flex items-center">
          <IoPersonOutline className="text-lg text-primary mr-2" />
          <p className="uppercase text-gray-500 font-semibold text-base">
            By Developers
          </p>
        </div>
        <span>
          <IoShareSocialSharp className="text-base text-gray-500" />
        </span>
      </div>
    </motion.div>
  );
};

export default NewsCard;
