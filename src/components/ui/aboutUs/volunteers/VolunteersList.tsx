import { useGetVolunteersDataQuery } from "../../../../redux/features/weCare/weCare.api";
import SingleVolunteer from "./SingleVolunteer";
import Container from "../../Container";

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
    <Container className="p-5">
      <div className="text-center">
        <h3 className="text-[--color1] text-xl md:text-3xl  mb-3 font-serif">
          Professional Team
        </h3>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Meet Our Volunteer Team
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7 justify-items-center p-5">
        {data?.map((volunteer: TVolunteer) => (
          <SingleVolunteer
            key={volunteer._id}
            volunteer={volunteer}
          ></SingleVolunteer>
        ))}
      </div>
    </Container>
  );
};

export default VolunteersList;
