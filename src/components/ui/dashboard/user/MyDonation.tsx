import { useUserRole } from "../../../hooks/getUserRole";

const MyDonation = () => {
  const userRole = useUserRole();
  return (
    <>
      {userRole === "user" ? (
        <div>
          <h3>This is my Donation component - users</h3>
        </div>
      ) : (
        <h2>Page Not Found</h2>
      )}
    </>
  );
};

export default MyDonation;
