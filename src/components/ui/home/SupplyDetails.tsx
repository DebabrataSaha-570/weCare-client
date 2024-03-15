import { useNavigate, useParams } from "react-router-dom";
import Container from "../Container";
import PrimaryButton from "../PrimaryButton";
import Swal from "sweetalert2";
import { useGetSingleFoodSupplyQuery } from "../../../redux/features/weCare/weCare.api";

const SupplyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetSingleFoodSupplyQuery(id);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg "></span>
      </div>
    );
  }

  const handleDonateNow = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/dashboard");
      }
    });
  };
  return (
    <Container className="  my-5 px-5">
      <section className="max-w-[85%] md:max-w-[50%] mx-auto">
        <img
          src={data?.image}
          alt={data?.title}
          className=" rounded-lg  object-cover"
        />
        <h2 className="text-2xl font-semibold my-3">{data?.title}</h2>
        <p className="text-lg font-medium">{data?.description}</p>
        <div className="my-5">
          <table className="table border border-secondary text-base">
            <tbody>
              <tr>
                <td className="text-primary font-bold ">Category :</td>
                <td className="font-medium">{data?.category}</td>
              </tr>
              <tr>
                <td className="text-primary font-bold">Available Quantity :</td>
                <td className="font-medium">
                  {data?.quantity?.quantity} {data.quantity.quantityUnit}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center">
          <PrimaryButton onClick={handleDonateNow} className="">
            Donate Now
          </PrimaryButton>
        </div>
      </section>
    </Container>
  );
};

export default SupplyDetails;
