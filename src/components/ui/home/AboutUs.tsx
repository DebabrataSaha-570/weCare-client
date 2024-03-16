import { motion } from "framer-motion";
import Container from "../Container";
import image2 from "../../../assets/about_us-2.png";
import PrimaryButton from "../PrimaryButton";

const AboutUs = () => {
  return (
    <Container className="my-24 px-8">
      <div className="flex flex-col  md:flex-row items-center  justify-between gap-[100px]">
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          // viewport={{ once: true }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="rounded-lg object-cover w-[550px] h-[500px] md:h-[650px] order-1 md:order-none"
          src={image2}
          alt="about_us_image"
        />

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          // viewport={{ once: true }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className=""
        >
          <h5 className="text-[--color1] text-2xl md:text-3xl mb-3 font-serif ">
            About Us
          </h5>

          <h2 className="text-3xl md:text-4xl font-semibold mb-5 leading-relaxed ">
            Helping Today. Helping Tomorrow
          </h2>
          <p className="leading-loose text-base  md:text-lg text-[--color6] mb-7 font-medium">
            Discover weCare, your global hub for positive change in food
            distribution and supplies management. Connecting nonprofits, donors,
            and companies worldwide, weCare aims to make a difference. From
            local to international efforts, we provide essential tools and
            support to nonprofits, helping them distribute food effectively.
            Join us on this mission for a world where everyone has access to
            vital supplies, creating a brighter future for all.
          </p>

          <PrimaryButton>Learn More</PrimaryButton>
        </motion.div>
      </div>
    </Container>
  );
};

export default AboutUs;
