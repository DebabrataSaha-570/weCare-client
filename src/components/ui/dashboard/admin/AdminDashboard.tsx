import { useUserRole } from "../../../hooks/getUserRole";
import DashboardGutters from "../DashboardGutters";

const AdminDashboard = () => {
  const userRole = useUserRole();

  return (
    <>
      {userRole ? (
        <section>
          <DashboardGutters></DashboardGutters>
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
