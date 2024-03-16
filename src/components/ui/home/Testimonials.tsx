import Container from "../Container";
import Slider from "react-slick";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useGetTestimonialsDataQuery } from "../../../redux/features/weCare/weCare.api";

type AutoButtonProps = {
  className: string;
  onClick: () => void;
  currentSlide: number;
  slideCount?: number;
};

type TTestimonial = {
  _id: string;
  name: string;
  designation: string;
  image: string;
  supply: string;
  quantity: string;
  unit: string;
  testimonial: string;
};

const Testimonials = () => {
  const { data, isError, isLoading } = useGetTestimonialsDataQuery(null);

  if (isError) {
    return <p className="text-red-500">Something went wrong.</p>;
  }

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg "></span>
      </div>
    );
  }

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
            {data?.slice(0, 6)?.map((testimonial: TTestimonial) => (
              <div key={testimonial._id}>
                <div className="card   bg-[--color2] mx-2">
                  <div className="card-body text-quickSand">
                    <p className="text-lg text-[--color6] font-semibold">
                      {testimonial.testimonial}
                    </p>

                    <div>
                      <p className="text-[--color6] font-bold">
                        Donation :{" "}
                        <span className="text-[--color8] font-bold">
                          {" "}
                          {testimonial.supply}, {testimonial.quantity}{" "}
                          {testimonial.unit}{" "}
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center gap-5 mt-5">
                      <div className="avatar">
                        <div className="w-20 rounded-full">
                          <img
                            className="object-cover w-full h-full"
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                        </div>
                      </div>
                      <div>
                        <h2 className="font-bold text-xl">
                          {testimonial.name}
                        </h2>
                        <h4 className="text-primary font-semibold">
                          {testimonial.designation}
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
