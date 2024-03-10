import { FormEvent, useEffect, useState } from "react";

import toast from "react-hot-toast";
import {
  useGetSingleFoodSupplyQuery,
  useUpdateSingleSupplyMutation,
} from "../../redux/features/weCare/weCare.api";

type TModal = {
  id: string;
  handleModalClose: () => void;
};

const Modal = ({ id, handleModalClose }: TModal) => {
  const { data: SingleSupplyData } = useGetSingleFoodSupplyQuery(id);
  const [updateSingleSupply, { data: updateDataResponse }] =
    useUpdateSingleSupplyMutation();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState("");
  const [quantityUnit, setQuantityUnit] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");

  useEffect(() => {
    if (SingleSupplyData) {
      setTitle(SingleSupplyData?.title);
      setCategory(SingleSupplyData?.category);
      setDescription(SingleSupplyData?.description);
      setImage(SingleSupplyData?.image);
      setQuantity(SingleSupplyData?.quantity?.quantity);
      setQuantityUnit(SingleSupplyData?.quantity?.quantityUnit);
      setDonorName(SingleSupplyData?.donorName);
      setDonorEmail(SingleSupplyData?.donorEmail);
    }
  }, [SingleSupplyData]);

  const handleModalFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const updateData = {
      id,
      data: {
        title,
        category,
        quantity: { quantity, quantityUnit },
        description,
        image,
        donorName,
        donorEmail,
      },
    };
    updateSingleSupply(updateData);
  };
  useEffect(() => {
    if (updateDataResponse?.modifiedCount) {
      toast.success("Data updated Successfully");
      handleModalClose();
    }
  }, [updateDataResponse, handleModalClose]);

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={handleModalClose}
        >
          ✕
        </button>
        <form onSubmit={handleModalFormSubmit} className="p-4" method="dialog">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            className="input input-bordered w-full mb-3"
            defaultValue={SingleSupplyData?.title || ""}
          />

          <div className="flex gap-5 mb-3">
            <input
              onChange={(e) => setQuantity(e.target.value)}
              defaultValue={SingleSupplyData?.quantity.quantity || ""}
              type="number"
              placeholder="Quantity "
              className="input input-bordered w-full"
            />
            <select
              onChange={(e) => setQuantityUnit(e.target.value)}
              name="selectedUnit"
              className="select select-bordered w-full "
              defaultValue={SingleSupplyData?.quantity?.quantityUnit || ""}
            >
              <option disabled>Select Units</option>
              <option value="kg">Kg</option>
              <option value="litre">litre</option>
              <option value="Pcs">Pcs</option>
            </select>
          </div>

          <select
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full mb-3"
            defaultValue={SingleSupplyData?.category || ""}
          >
            <option disabled>Select Category</option>
            <option value="Food">Food</option>
            <option value="Hygiene">Hygiene Products</option>
            <option value="Baby">Baby Essentials</option>
          </select>

          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="textarea textarea-bordered textarea-md w-full mb-3"
            defaultValue={SingleSupplyData?.description || ""}
          ></textarea>

          <input
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="Product Image URL"
            className="input input-bordered w-full mb-3"
            defaultValue={SingleSupplyData?.image || ""}
          />

          <input
            onChange={(e) => setDonorName(e.target.value)}
            type="text"
            placeholder="Donor Name"
            className="input input-bordered w-full mb-3"
            defaultValue={SingleSupplyData?.donorName || ""}
          />

          <input
            onChange={(e) => setDonorEmail(e.target.value)}
            type="text"
            placeholder="Donor Email Address"
            className="input input-bordered w-full "
            defaultValue={SingleSupplyData?.donorEmail || ""}
          />

          <button type="submit" className="btn btn-secondary w-full mt-3">
            Update
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
