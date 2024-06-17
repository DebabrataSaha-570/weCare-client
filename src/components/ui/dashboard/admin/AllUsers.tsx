import { useUserRole } from "../../../hooks/getUserRole";

const AllUsers = () => {
  const userRole = useUserRole();
  return (
    <>
      {userRole === "admin" ? (
        <div>
          <h2>This is all usres component</h2>
        </div>
      ) : (
        <h2>Page Not Found.</h2>
      )}
    </>
  );
};

export default AllUsers;
