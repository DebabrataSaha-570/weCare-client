import { FaTrashAlt } from "react-icons/fa";
import {
  useGetUsersDataQuery,
  useUpdateUserRoleMutation,
} from "../../../../redux/features/weCare/weCare.api";
import { useUserRole } from "../../../hooks/getUserRole";
import Container from "../../Container";
import toast from "react-hot-toast";

type TUser = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

const AllUsers = () => {
  const userRole = useUserRole();

  const { data, isError, isLoading } = useGetUsersDataQuery("");
  const [updateUserRole] = useUpdateUserRoleMutation();

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg "></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h2 className="text-red-500 text-xl">Something went wrong</h2>
      </div>
    );
  }

  const handleMakeAdmin = async (id: string) => {
    const updatedData = {
      _id: id,
      role: "admin",
    };
    try {
      await updateUserRole(updatedData);
      toast.success("User role updated successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  const handleDelete = (id: string) => {
    console.log(id);
    toast.error("Only super admin can delete this!");
  };

  return (
    <>
      {userRole === "admin" ? (
        <Container>
          <div className="flex justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold">All Users</h2>
          </div>

          <div>
            <div className="overflow-x-auto rounded-lg shadow-sm mt-6">
              <table className="table border">
                {/* head */}
                <thead className="bg-[--thead] text-base text-gray-300">
                  <tr className="">
                    <th></th>
                    <th className="">Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th className="">Actions</th>
                  </tr>
                </thead>
                <tbody className="">
                  {data.map((user: TUser, index: number) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td className="flex items-center gap-3">
                        {user.role === "user" ? (
                          <button
                            onClick={() => handleMakeAdmin(user._id)}
                            className="btn btn-sm btn-secondary"
                          >
                            Make Admin
                          </button>
                        ) : (
                          <button disabled className="btn btn-sm ">
                            Make Admin
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="btn btn-sm btn-error text-white"
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      ) : (
        <h2>Page Not Found.</h2>
      )}
    </>
  );
};

export default AllUsers;
