import { useUserRole } from "../../../hooks/getUserRole";

const AddDonation = () => {
  const userRole = useUserRole();
  return (
    <>
      {userRole === "user" ? (
        <div>
          <h2>This is add donation - user</h2>
        </div>
      ) : (
        <h2>Page Not Found</h2>
      )}
    </>
  );
};

export default AddDonation;
