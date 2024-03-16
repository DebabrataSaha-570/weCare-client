import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useCreateFoodItemMutation } from "../../../redux/features/weCare/weCare.api";
import { useAppSelector } from "../../../redux/hook";

const CreateSupply = () => {
  const [addFoodSupply, { data, isError, isLoading }] =
    useCreateFoodItemMutation();

  const auth = useAppSelector((state) => state.auth);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState("");
  const [quantityUnit, setQuantityUnit] = useState("");
  const [donorName, setDonorName] = useState(auth.user?.name);
  const [donorEmail, setDonorEmail] = useState(auth.user?.email);
  const [donorImage, setDonorImage] = useState("");

  const handleAddSupply = (e: FormEvent) => {
    e.preventDefault();

    const foodItem = {
      title,
      category,
      quantity: { quantity, quantityUnit },
      description,
      image,
      donorName,
      donorEmail,
      donorImage,
    };

    addFoodSupply(foodItem);
  };

  useEffect(() => {
    if (data?.insertedId) {
      toast.success("Food Added Successfully");

      setTitle("");
      setCategory("");
      setDescription("");
      setImage("");
      setQuantity("");
      setQuantityUnit("");
    }
  }, [data]);

  useEffect(() => {
    if (isError) {
      toast.error("Something Went wrong");
    }
  }, [isError]);

  return (
    <>
      <h3 className="text-center text-3xl font-semibold">Add Item</h3>
      <div className="w-full md:max-w-[50%] mx-auto">
        <form
          onSubmit={handleAddSupply}
          className="flex flex-col gap-4  mt-6 p-6 bg-[--create_form] rounded-lg shadow-md "
        >
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Title"
            className=" rounded-md p-3 focus:ring focus:ring-[--color6] border border-[--color8] w-full "
            required
          />

          <div className="flex gap-5">
            <input
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
              type="number"
              placeholder="Quantity "
              className=" rounded-md p-3 focus:ring focus:ring-[--color6] border border-[--color8] w-full"
            />
            <select
              onChange={(e) => setQuantityUnit(e.target.value)}
              name="selectedUnit"
              className=" rounded-md p-3 focus:ring focus:ring-[--color6] border border-[--color8] w-full"
            >
              <option value={quantityUnit} disabled selected>
                Select Units
              </option>
              <option value="kg">Kg</option>
              <option value="litre">litre</option>
              <option value="Pcs">Pcs</option>
            </select>
          </div>

          <select
            onChange={(e) => setCategory(e.target.value)}
            className=" rounded-md p-3 focus:ring focus:ring-[--color6] border border-[--color8] w-full"
          >
            <option value={category} disabled selected>
              Select Category
            </option>
            <option value="Food">Food</option>
            <option value="Hygiene">Hygiene Products</option>
            <option value="Baby">Baby Essentials</option>
          </select>

          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows={3}
            placeholder="Description"
            className=" rounded-md p-3 focus:ring focus:ring-[--color6] border border-[--color8] w-full"
            required
          ></textarea>

          <input
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            placeholder="Product Image URL"
            className=" rounded-md p-3 focus:ring focus:ring-[--color6] border border-[--color8] w-full"
            required
          />

          <input
            onChange={(e) => setDonorName(e.target.value)}
            defaultValue={donorName}
            type="text"
            placeholder="Donor Name"
            className=" rounded-md p-3 focus:ring focus:ring-[--color6] border border-[--color8] w-full"
            required
          />

          <input
            onChange={(e) => setDonorEmail(e.target.value)}
            defaultValue={auth.user?.email || donorEmail}
            type="text"
            placeholder="Donor Email"
            className=" rounded-md p-3 focus:ring focus:ring-[--color6] border border-[--color8] w-full"
            required
          />

          <input
            onChange={(e) => setDonorImage(e.target.value)}
            defaultValue={donorImage}
            type="text"
            placeholder="Donor Image URL"
            className=" rounded-md p-3 focus:ring focus:ring-[--color6] border border-[--color8] w-full"
            required
          />

          {isLoading ? (
            <button className="btn">
              <span className="loading loading-spinner"></span>
              loading
            </button>
          ) : (
            <button type="submit" className="btn btn-secondary">
              Add item
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default CreateSupply;
