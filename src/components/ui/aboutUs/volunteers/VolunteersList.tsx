import { motion } from "framer-motion";
import { useGetVolunteersDataQuery } from "../../../../redux/features/weCare/weCare.api";
import SingleVolunteer from "./SingleVolunteer";

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

const VolunteersList = () => {
  const { data, isLoading, isError } = useGetVolunteersDataQuery(null);

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

  return (
    <div>
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
        <h3 className="text-[--color1] text-xl md:text-2xl  mb-3 font-serif">
          PROFESSIONAL TEAM
        </h3>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Meet Our Volunteer Team
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7 justify-items-center">
        {data?.map((volunteer: TVolunteer) => (
          <SingleVolunteer
            key={volunteer._id}
            volunteer={volunteer}
          ></SingleVolunteer>
        ))}
      </div>
    </div>
  );
};

export default VolunteersList;
