import { useUserRole } from "../../../hooks/getUserRole";
import DashboardGutters from "../DashboardGutters";
import RecentDonations from "../RecentDonations";
import RecentReviews from "../RecentReviews";
import SupplyCalculation from "../SupplyCalculation";

const AdminDashboard = () => {
  const userRole = useUserRole();

  return (
    <>
      {userRole ? (
        <section>
          <DashboardGutters></DashboardGutters>
          <div className="flex flex-col md:flex-row my-10">
            <div className="flex-[60%] mb-5 md:my-0">
              <SupplyCalculation></SupplyCalculation>
            </div>
            <div className="flex-[40%]">
              <RecentDonations showViewAll={true}></RecentDonations>
            </div>
          </div>
          <RecentReviews showViewAll={true}></RecentReviews>
        </section>
      ) : (
        <div>
          <h2>Page Not Found.</h2>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
