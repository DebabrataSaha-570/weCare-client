import { FaArrowRightLong } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import loadingImage from "../../assets/placeholder_loading_image.jpg";
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

type CardProps = {
  supply: TSupply;
};

const ProductCard = ({ supply }: CardProps) => {
  const { _id, image, title, category, quantity } = supply;

  return (
    <div className=" p-6 rounded-lg bg-[--card_background]  shadow-lg mb-5 ">
      <div className="relative">
        <LazyLoadImage
          className=" w-full  object-cover rounded-lg mx-auto h-[300px] "
          src={image}
          effect="blur"
          placeholderSrc={loadingImage}
          alt={title}
        />
        <p
          className={`text-sm absolute top-4 left-5 bg-primary px-3 rounded-full font-semibold text-[--color4] py-1`}
        >
          {category}
        </p>
      </div>

      <div className="px-6 py-3">
        <h3 className="text-primary text-lg font-serif my-3">
          Available: {quantity?.quantity} {quantity?.quantityUnit}
        </h3>

        <h2 className="text-2xl font-semibold ">{title}</h2>
        <hr className="mt-5 border border-[--color7]" />
      </div>

      <div className="px-6 py-2  cursor-pointer">
        <Link
          to={`/supplies/${_id}`}
          className="text-[--color6] font-semibold uppercase flex items-center  gap-4 hover:text-primary transition duration-500"
        >
          View Details <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
