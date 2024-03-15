import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";

import Container from "../Container";
import Swal from "sweetalert2";
import Modal from "../Modal";
import { useEffect, useState } from "react";
import {
  useDeleteFoodSupplyMutation,
  useGetFoodSuppliesQuery,
} from "../../../redux/features/weCare/weCare.api";

type TSupply = {
  _id: string;
  title: string;
  category: string;
  quantity: {
    quantity: string;
    quantityUnit: string;
  };
  description: string;
  image: string;
  donorName: string;
  donorAddress: string;
};

const DashboardAllSupplies = () => {
  const { data, isError, isLoading } = useGetFoodSuppliesQuery("");
  const [modalId, setModalId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [deleteSupply] = useDeleteFoodSupplyMutation();

  useEffect(() => {
    if (isModalOpen) {
      const modalElement = document.getElementById(
        "my_modal_3"
      ) as HTMLDialogElement | null;
      if (modalElement) {
        modalElement.showModal();
      }
    }
  }, [isModalOpen]);

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
        <h2 className="text-red-500">Something went wrong</h2>;
      </div>
    );
  }

  const handleModalOpen = (id: string) => {
    setIsModalOpen(true);
    setModalId(id);
  };

  const handleModalClose = () => {
    setModalId("");
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSupply(id);
      }
    });
  };

  return (
    <Container>
      <div className="flex justify-center">
        <h2 className="text-2xl md:text-3xl font-semibold">All Supplies</h2>
      </div>

      <div>
        <div className="overflow-x-auto rounded-lg shadow-sm mt-6">
          <table className="table ">
            {/* head */}
            <thead className="bg-gray-300 text-base">
              <tr className="">
                <th></th>
                <th className="">Title</th>
                <th>Category</th>
                <th>Quantity</th>
                <th className="">Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {data?.map((supply: TSupply, index: number) => (
                <tr key={index} className="">
                  <th>{index + 1}</th>
                  <td>{supply?.title}</td>
                  <td>{supply?.category}</td>
                  <td>
                    {supply?.quantity?.quantity}{" "}
                    {supply?.quantity?.quantityUnit}
                  </td>
                  <td className="flex">
                    <button
                      className="btn btn-warning text-white  mx-3"
                      onClick={() => handleModalOpen(supply?._id)}
                    >
                      <FaPenToSquare />
                    </button>
                    {isModalOpen && (
                      <Modal
                        id={modalId}
                        handleModalClose={handleModalClose}
                      ></Modal>
                    )}
                    <button
                      onClick={() => handleDelete(supply?._id)}
                      className="btn btn-error text-white "
                    >
                      <FaTrashCan />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default DashboardAllSupplies;
