import { useUserRole } from "../../../hooks/getUserRole";

const AllDonations = () => {
  const userRole = useUserRole();
  return (
    <>
      {userRole === "admin" ? (
        <div>
          <h2>This is all donations component</h2>
        </div>
      ) : (
        <h2>Page Not Found.</h2>
      )}
    </>
  );
};

export default AllDonations;
