import Slider from "react-slick";
import image1 from "../../../assets/banner_img_1.jpg";
import image2 from "../../../assets/banner_img_2.jpg";
import image3 from "../../../assets/banner_img_3.jpg";
import PrimaryButton from "../PrimaryButton";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

type AutoButtonProps = {
  className: string;
  onClick: () => void;
};

const Banner = () => {
  const PreviousBtn = ({ className, onClick }: AutoButtonProps) => {
    return (
      <>
        <div className={className} onClick={onClick}>
          <FaArrowLeftLong style={{ fontSize: "14px" }} />
        </div>
      </>
    );
  };
  const NextBtn = ({ className, onClick }: AutoButtonProps) => {
    return (
      <>
        <div className={className} onClick={onClick}>
          <FaArrowRightLong style={{ fontSize: "14px" }} />
        </div>
      </>
    );
  };
  const settings = {
    infinite: true,
    pauseOnHover: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: (
      <NextBtn
        className={""}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
    prevArrow: (
      <PreviousBtn
        className={""}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
  };
  return (
    <Slider {...settings} className="">
      <div className="w-full ">
        <div className="h-[630px] relative ">
          <img
            src={image1}
            alt="banner_img_1"
            className="object-cover w-full h-full banner-image"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-[70%] md:max-w-[55%]">
              <h4 className="text-white text-xl md:text-2xl uppercase text-quickSand font-bold">
                We are always open for children
              </h4>
              <br />
              <h2 className="text-4xl md:text-6xl lg:text-8xl text-white font-extrabold text-quickSand">
                Give a helping hand to those who need it{" "}
              </h2>
              <div className="flex justify-center mt-5">
                <PrimaryButton>Learn More</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="h-[630px] relative ">
          <img
            src={image2}
            alt="banner_img_1"
            className="object-cover w-full h-full banner-image"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-[70%] md:max-w-[55%]">
              <h4 className="text-white text-xl md:text-2xl uppercase text-quickSand font-bold">
                We are creating a brighter tomorrow
              </h4>
              <br />
              <h2 className="text-4xl md:text-6xl lg:text-8xl text-white font-extrabold text-quickSand">
                Make Someone's Life by Giving of Yours
              </h2>
              <div className="flex justify-center mt-5">
                <PrimaryButton>Learn More</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="h-[630px] relative ">
          <img
            src={image3}
            alt="banner_img_1"
            className="object-cover w-full h-full banner-image"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-[70%] md:max-w-[55%]">
              <h4 className="text-white text-xl md:text-2xl uppercase text-quickSand font-bold">
                Rebuilding lives for futures
              </h4>
              <br />
              <h2 className="text-4xl md:text-6xl lg:text-8xl text-white font-extrabold text-quickSand">
                There is no Big Thing Than Your Concern
              </h2>
              <div className="flex justify-center mt-5">
                <PrimaryButton>Learn More</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
