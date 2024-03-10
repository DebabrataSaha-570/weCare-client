import { useGetFoodSuppliesQuery } from "../../../redux/features/weCare/weCare.api";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type TItem = {
  _id: string;
  title: string;
  image: string;
  donorName: string;
  donorEmail: string;
  description: string;
  category: string;
  quantity: {
    quantity: string;
    quantityUnit: string;
  };
};

const SupplyCalculation = () => {
  const { data } = useGetFoodSuppliesQuery(null);
  const foodItems = data?.filter(
    (item: TItem) => item.category === "Food"
  )?.length;
  const hygieneItems = data?.filter(
    (item: TItem) => item.category === "Hygiene"
  )?.length;
  const babyItems = data?.filter(
    (item: TItem) => item.category === "Baby"
  )?.length;

  const chartData = {
    labels: ["Food", "Hygiene Products", "Baby Essentials"],
    datasets: [
      {
        label: "Total Available Items",
        data: [foodItems, hygieneItems, babyItems],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-[80%] md:max-w-[50%] mx-auto">
      <Pie data={chartData} />
    </div>
  );
};

export default SupplyCalculation;
