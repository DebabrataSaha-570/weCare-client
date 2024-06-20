import DashboardGutters from "../DashboardGutters";
import RecentDonations from "../RecentDonations";
import SupplyCalculation from "../SupplyCalculation";

const UserDashboard = () => {
  return (
    <div>
      <DashboardGutters></DashboardGutters>
      <div className="flex flex-col md:flex-row my-10">
        <div className="flex-[60%] mb-5 md:my-0">
          <SupplyCalculation></SupplyCalculation>
        </div>
        <div className="flex-[40%]">
          <RecentDonations></RecentDonations>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
