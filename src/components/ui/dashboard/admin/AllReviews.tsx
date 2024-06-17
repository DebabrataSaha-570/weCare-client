import { useUserRole } from "../../../hooks/getUserRole";

const AllReviews = () => {
  const userRole = useUserRole();
  return (
    <>
      {userRole === "admin" ? (
        <div>
          <h2>This is all reviews component</h2>
        </div>
      ) : (
        <h2>Page Not Found.</h2>
      )}
    </>
  );
};

export default AllReviews;
