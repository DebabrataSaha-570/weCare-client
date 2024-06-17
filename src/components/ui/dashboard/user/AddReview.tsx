import { useUserRole } from "../../../hooks/getUserRole";

const AddReview = () => {
  const userRole = useUserRole();
  return (
    <>
      {userRole === "user" ? (
        <div>
          <h2>This is add review component - user</h2>
        </div>
      ) : (
        <h2>Page Not Found.</h2>
      )}
    </>
  );
};

export default AddReview;
