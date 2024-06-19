import { useGetSingleUserDonationQuery } from "../../../../redux/features/weCare/weCare.api";
import { useAppSelector } from "../../../../redux/hook";
import { useUserRole } from "../../../hooks/getUserRole";
import Container from "../../Container";

type TDonation = {
  _id: string;
  title: string;
  category: "Food";
  quantity: { quantity: string; quantityUnit: string };
  description: string;
  image: string;
  donorName: string;
  donorEmail: string;
  donorImage: string;
};

const MyDonation = () => {
  const userRole = useUserRole();
  const auth = useAppSelector((state) => state.auth);

  const userEmail = auth.user?.email;
  console.log(userEmail);

  const { data, isError, isLoading } = useGetSingleUserDonationQuery(userEmail);

  console.log(data);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg "></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h2 className="text-red-500">Something went wrong</h2>;
      </div>
    );
  }
  return (
    <>
      {userRole === "user" ? (
        <Container>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold">My Donations</h2>
            {!data.length && (
              <h2 className="text-xl mt-5">
                You have not made any donations yet. We encourage you to
                contribute by making a donation.
              </h2>
            )}
          </div>

          {data.length > 0 && (
            <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center mt-10">
              {data.map((donation: TDonation, index: number) => (
                <div key={index}>
                  <div className="card w-96 md:w-full  card-compact  bg-[--color2] shadow-xl">
                    <figure>
                      <img src={donation.image} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{donation.title}</h2>
                      <p>
                        {" "}
                        <span className="font-semibold">Name :</span>{" "}
                        {donation.donorName}
                      </p>
                      <p>
                        <span className="font-semibold">Email :</span>{" "}
                        {donation.donorEmail}
                      </p>
                      <p>
                        <span className="font-semibold">Quantity :</span>
                        {donation.quantity.quantity}
                        {donation.quantity.quantityUnit}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      ) : (
        <h2>Page Not Found</h2>
      )}
    </>
  );
};

export default MyDonation;
