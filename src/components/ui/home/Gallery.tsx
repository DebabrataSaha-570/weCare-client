import Slider from "react-slick";

import image1 from "../../../assets/gallery/donation_image_1.jpg";
import image2 from "../../../assets/gallery/donation_image_2.jpg";
import image3 from "../../../assets/gallery/donation_image_3.jpg";
import image4 from ".././../../assets/gallery/donation_image_4.jpg";
import image5 from ".././../../assets/gallery/donation_image_5.jpg";
import image6 from ".././../../assets/gallery/donation_image_6.jpg";
import image7 from ".././../../assets/gallery/donation_image_7.jpg";
import image8 from ".././../../assets/gallery/donation_image_8.jpg";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

type AutoButtonProps = {
  className: string;
  onClick: () => void;
  currentSlide: number;
  slideCount?: number;
};

const Gallery = () => {
  const slidesToShow = 4;
  const PreviousBtn = ({
    className,
    onClick,
    currentSlide,
  }: AutoButtonProps) => {
    return (
      <>
        {currentSlide !== 0 && (
          <div className={className} onClick={onClick}>
            <FaArrowLeftLong style={{ fontSize: "14px" }} />
          </div>
        )}
      </>
    );
  };
  const NextBtn = ({
    className,
    onClick,
    currentSlide,
    slideCount = 0,
  }: AutoButtonProps) => {
    return (
      <>
        {currentSlide !== slideCount - slidesToShow && (
          <div className={className} onClick={onClick}>
            <FaArrowRightLong style={{ fontSize: "14px" }} />
          </div>
        )}
      </>
    );
  };

  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    nextArrow: (
      <NextBtn
        className={""}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        currentSlide={0}
      />
    ),
    prevArrow: (
      <PreviousBtn
        className={""}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        currentSlide={0}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-24">
      <div className="text-center mb-10">
        <h3 className="text-[--color1] text-2xl md:text-3xl mb-3 font-serif">
          Gallery
        </h3>
        <h2 className="text-4xl font-semibold">Our Community Outreach</h2>
      </div>

      {/* slider  */}
      <div className="slider-container">
        <Slider {...settings}>
          {/* slide 1 */}
          <div className="">
            <div className="relative cursor-pointer group h-[320px]">
              <img
                src={image1}
                className="object-cover w-full h-full group-hover:grayscale transition-all duration-500"
                alt="image 1"
              />

              <div className="absolute bottom-0 w-full bg-primary h-[35%] transition-all duration-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
                <div className="px-5 py-2 text-white font-bold text-quickSand">
                  <h3 className="text-2xl ">Food Donation</h3>
                  <h4 className="text-xl">#Turkey</h4>
                </div>
              </div>
            </div>
          </div>
          {/* slide 2 */}
          <div>
            <div className="relative cursor-pointer group h-[320px] ">
              <img
                src={image2}
                className="object-cover h-full w-full group-hover:grayscale transition-all duration-500"
                alt="image 1"
              />

              <div className="absolute bottom-0 w-full bg-primary h-[35%] transition-all duration-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
                <div className="px-5 py-2 text-white font-bold text-quickSand">
                  <h3 className="text-2xl ">Rescue, Love, Save</h3>
                  <h4 className="text-xl">#Canada</h4>
                </div>
              </div>
            </div>
          </div>
          {/* slide 3 */}
          <div>
            <div className="relative cursor-pointer group h-[320px]">
              <img
                src={image3}
                className="object-cover group-hover:grayscale transition-all duration-500 w-full h-full"
                alt="image 1"
              />

              <div className="absolute bottom-0 w-full bg-primary h-[35%] transition-all duration-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
                <div className="px-5 py-2 text-white font-bold text-quickSand">
                  <h3 className="text-2xl ">Cloths Donation</h3>
                  <h4 className="text-xl">#Bangladesh</h4>
                </div>
              </div>
            </div>
          </div>
          {/* slide 4 */}
          <div>
            <div className="relative cursor-pointer group h-[320px]">
              <img
                src={image4}
                className="object-cover w-full h-full group-hover:grayscale transition-all duration-500"
                alt="image 1"
              />

              <div className="absolute bottom-0 w-full bg-primary h-[35%] transition-all duration-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
                <div className="px-5 py-2 text-white font-bold text-quickSand">
                  <h3 className="text-2xl ">Blood Donation</h3>
                  <h4 className="text-xl">#Thailand</h4>
                </div>
              </div>
            </div>
          </div>
          {/* slide 5 */}
          <div>
            <div className="relative cursor-pointer group h-[320px]">
              <img
                src={image5}
                className="object-cover h-full w-full group-hover:grayscale transition-all duration-500"
                alt="image 1"
              />

              <div className="absolute bottom-0 w-full bg-primary h-[35%] transition-all duration-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
                <div className="px-5 py-2 text-white font-bold text-quickSand">
                  <h3 className="text-2xl ">Food Donation</h3>
                  <h4 className="text-xl">#Ukraine </h4>
                </div>
              </div>
            </div>
          </div>
          {/* slide 6 */}
          <div>
            <div className="relative cursor-pointer group h-[320px]">
              <img
                src={image6}
                className="object-cover w-full h-full group-hover:grayscale transition-all duration-500"
                alt="image 1"
              />

              <div className="absolute bottom-0 w-full bg-primary h-[35%] transition-all duration-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
                <div className="px-5 py-2 text-white font-bold text-quickSand">
                  <h3 className="text-2xl ">Cloths Donation</h3>
                  <h4 className="text-xl">#India</h4>
                </div>
              </div>
            </div>
          </div>
          {/* slide 7 */}
          <div>
            <div className="relative cursor-pointer group h-[320px]">
              <img
                src={image7}
                className="object-cover w-full h-full group-hover:grayscale transition-all duration-500"
                alt="image 1"
              />

              <div className="absolute bottom-0 w-full bg-primary h-[35%] transition-all duration-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
                <div className="px-5 py-2 text-white font-bold text-quickSand">
                  <h3 className="text-2xl ">Food Donation</h3>
                  <h4 className="text-xl">#China</h4>
                </div>
              </div>
            </div>
          </div>
          {/* slide 8 */}
          <div>
            <div className="relative cursor-pointer group h-[320px]">
              <img
                src={image8}
                className="object-cover w-full h-full group-hover:grayscale transition-all duration-500"
                alt="image 1"
              />

              <div className="absolute bottom-0 w-full bg-primary h-[35%] transition-all duration-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible ">
                <div className="px-5 py-2 text-white font-bold text-quickSand">
                  <h3 className="text-2xl ">Medicine Donation</h3>
                  <h4 className="text-xl">#USA</h4>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
