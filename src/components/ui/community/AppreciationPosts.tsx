import { useGetGratitudesDataQuery } from "../../../redux/features/weCare/weCare.api";

type TGratitude = {
  _id: string;
  Image: string;
  Name: string;
  Address: string;
  Comments: string;
};

const AppreciationPosts = () => {
  const { data, isError, isLoading } = useGetGratitudesDataQuery(null);

  if (isError) {
    return <p className="text-red-500">Something Went Wrong!</p>;
  }

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg "></span>
      </div>
    );
  }
  return (
    <section>
      <div>
        {data?.map((gratitude: TGratitude) => (
          <div
            className="shadow-lg bg-[--card_background] p-10 rounded-lg mb-5"
            key={gratitude._id}
          >
            <div className="flex gap-5">
              <div className="avatar mb-3">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    className="object-cover"
                    src={gratitude?.Image}
                    alt={gratitude.Name}
                  />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold">{gratitude.Name}</h2>
                <h3 className="text-base  text-[--color6] font-medium">
                  {gratitude.Address}
                </h3>
              </div>
            </div>
            <h3 className=" px-5 py-2 text-[--color6] font-medium text-base">
              {gratitude.Comments}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppreciationPosts;
