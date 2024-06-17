import { useUserRole } from "../../hooks/getUserRole";
import AdminDashboard from "./admin/AdminDashboard";
import UserDashboard from "./user/UserDashboard";

const Dashboard = () => {
  const userRole = useUserRole();
  return (
    <div>
      {userRole === "user" && <UserDashboard></UserDashboard>}
      {userRole === "admin" && <AdminDashboard></AdminDashboard>}
    </div>
  );
};

export default Dashboard;
