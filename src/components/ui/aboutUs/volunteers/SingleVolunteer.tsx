import { motion, useAnimation } from "framer-motion";
import { FaLinkedinIn, FaPhoneAlt, FaShareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
type TVolunteer = {
  _id: string;
  volunteerRole: string;
  volunteerFirstName: string;
  volunteerLastName: string;
  volunteerEmail: string;
  volunteerNumber: string;
  volunteerAddress: string;
  volunteerPostalCode: string;
  volunteerLinkedin: string;
  volunteerPhoto: string;
  volunteerComments: string;
};

type TVolunteerProps = {
  volunteer: TVolunteer;
};

const SingleVolunteer = ({ volunteer }: TVolunteerProps) => {
  const {
    volunteerPhoto,
    volunteerFirstName,
    volunteerLastName,
    volunteerRole,
    volunteerEmail,
    volunteerLinkedin,
    volunteerNumber,
  } = volunteer;

  const controls = useAnimation();

  const startHoverAnimation = () => {
    controls.start({ x: 0, opacity: 1 });
  };

  const endHoverAnimation = () => {
    controls.start({ x: 140, opacity: 1 });
  };

  return (
    <div>
      <div
        onMouseEnter={startHoverAnimation}
        onMouseLeave={endHoverAnimation}
        className="card w-96 bg-base-100 shadow-xl group cursor-pointer overflow-hidden"
      >
        <figure>
          <img
            className="relative object-cover group-hover:grayscale transition-all duration-500 "
            src={volunteerPhoto}
            alt="photo"
          />
        </figure>
        <motion.div
          initial={{ x: 140, opacity: 1 }}
          animate={controls}
          transition={{
            ease: "easeIn",
            duration: 0.5,
          }}
          className="absolute top-[60%] right-0 "
        >
          <p className="flex items-center gap-3 bg-primary p-1 rounded-l-full">
            <span className=" bg-white rounded-full p-3">
              <FaShareAlt className="text-xl text-primary " />
            </span>
            <a
              data-tip={volunteerEmail}
              target="_blank "
              className="rounded-full border border-white p-2 tooltip hover:tooltip-secondary cursor-pointer"
            >
              <IoMdMail className="text-base text-white" />
            </a>
            <a
              data-tip={volunteerNumber}
              target="_blank "
              className="rounded-full border border-white p-2 tooltip hover:tooltip-secondary cursor-pointer"
            >
              <FaPhoneAlt className="text-base text-white" />
            </a>
            <a
              href={volunteerLinkedin}
              target="_blank "
              className="rounded-full border border-white p-2   cursor-pointer mr-2"
            >
              <FaLinkedinIn className="text-base text-white " />
            </a>
          </p>
        </motion.div>

        <div className="card-body">
          <h2 className="card-title">
            {volunteerFirstName} {volunteerLastName}
          </h2>
          <hr />
          <div className="card-actions">
            <p className="text-base text-gray-500 font-semibold">
              {volunteerRole} Volunteer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVolunteer;
