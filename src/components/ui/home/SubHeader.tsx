import { motion } from "framer-motion";
import Container from "../Container";
import SecondaryButton from "../SecondaryButton";

const SubHeader = () => {
  return (
    <section className="bg-[--color2] py-20">
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        <div className="row-span-2">
          <h3 className="text-3xl font-semibold max-w-[90%] mb-8 text-wrap">
            Connects Nonprofits, Donors, & Companies in Every Country
          </h3>
          <SecondaryButton className="w-[165px]">DONATE NOW</SecondaryButton>
        </div>
        <div className="flex gap-6">
          <span>
            {" "}
            <motion.img
              initial={{ opacity: 0, translateY: -50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.3,
                type: "spring",
                stiffness: 80,
              }}
              width="130"
              height="130"
              src="https://img.icons8.com/wired/64/FA5252/vegetarian-food.png"
              alt="vegetarian-food"
            />
          </span>
          <div>
            <h4 className="text-xl font-semibold mb-3">Healthy Food</h4>
            <p className="text-gray-500 text-wrap">
              We help local nonprofits access the funding, tools, training, and
              support they need to become more.
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <span>
            {" "}
            <motion.img
              initial={{ opacity: 0, translateY: -50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.3,
                type: "spring",
                stiffness: 80,
              }}
              width="130"
              height="130"
              src="https://img.icons8.com/wired/64/ffae06/juice-bottle.png"
              alt="juice-bottle"
            />
          </span>
          <div>
            <h4 className="text-xl font-semibold mb-3">Clean Water</h4>
            <p className="text-gray-500">
              We help local nonprofits access the funding, tools, training, and
              support they need to become more.
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <span>
            {" "}
            <motion.img
              initial={{ opacity: 0, translateY: -50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.3,
                type: "spring",
                stiffness: 80,
              }}
              width="130"
              height="130"
              src="https://img.icons8.com/wired/64/33b8e4/doctors-bag.png"
              alt="doctors-bag"
            />
          </span>
          <div>
            <h4 className="text-xl font-semibold mb-3">Medical Help</h4>
            <p className="text-gray-500">
              We help local nonprofits access the funding, tools, training, and
              support they need to become more.
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <span>
            {" "}
            <motion.img
              initial={{ opacity: 0, translateY: -50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.3,
                type: "spring",
                stiffness: 80,
              }}
              width="130"
              height="130"
              src="https://img.icons8.com/wired/64/40C057/physics.png"
              alt="physics"
            />
          </span>
          <div>
            <h4 className="text-xl font-semibold mb-3">Education</h4>
            <p className="text-gray-500">
              We help local nonprofits access the funding, tools, training, and
              support they need to become more.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubHeader;
