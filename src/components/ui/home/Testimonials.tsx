import Container from "../Container";
import reviewsData from "../../../assets/data/reviewsData.ts";
import Slider from "react-slick";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

type AutoButtonProps = {
  className: string;
  onClick: () => void;
  currentSlide: number;
  slideCount?: number;
};

const Testimonials = () => {
  const slidesToShow = 3;
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
        {currentSlide + slidesToShow < slideCount && (
          <div className={className} onClick={onClick}>
            <FaArrowRightLong style={{ fontSize: "14px" }} />
          </div>
        )}
      </>
    );
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
          slidesToScroll: 4,
          infinite: true,
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
    <Container className="my-24 px-3">
      <div className="text-center">
        <h3 className="text-[--color1] text-2xl md:text-3xl mb-3 font-serif">
          Testimonials
        </h3>
        <h2 className="text-4xl font-semibold">Read Our Donor's Feedback </h2>
      </div>

      <div className="my-10">
        <div className="slider-container">
          <Slider {...settings}>
            {reviewsData.map((review) => (
              <div key={review.id}>
                <div className="card   bg-[--color2] mx-2">
                  <div className="card-body text-quickSand">
                    <p className="text-lg text-gray-500 font-semibold">
                      {review.review}
                    </p>

                    <div>
                      <p className="text-gray-500 font-bold">
                        Donation :{" "}
                        <span className="text-[--color1] font-bold">
                          {" "}
                          {review.supplyContribution?.supplyItem},{" "}
                          {review.supplyContribution?.quantityAmount}{" "}
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center gap-5 mt-5">
                      <div className="avatar">
                        <div className="w-20 rounded-full">
                          <img
                            className="object-cover w-full h-full"
                            src={review.userImage}
                            alt={review.userName}
                          />
                        </div>
                      </div>
                      <div>
                        <h2 className="font-bold text-xl">{review.userName}</h2>
                        <h4 className="text-primary font-semibold">
                          {review.userDesignation}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
