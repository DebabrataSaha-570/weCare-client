import {
  useGetFoodSuppliesQuery,
  useGetTestimonialsDataQuery,
  useGetUsersDataQuery,
  useGetVolunteersDataQuery,
} from "../../../redux/features/weCare/weCare.api";

const DashboardGutters = () => {
  const { data: donationData } = useGetFoodSuppliesQuery("");
  const { data: usersData } = useGetUsersDataQuery("");
  const { data: reviewsData } = useGetTestimonialsDataQuery("");
  const { data: volunteersData } = useGetVolunteersDataQuery("");

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <div className="bg-primary rounded-md px-3 py-2 flex justify-between items-center text-white">
        <div>
          <h2 className="text-3xl font-semibold">
            {donationData?.length || 0}
          </h2>
          <p className="text-md font-semibold">Donations</p>
        </div>
        <div>
          <img
            className="w-[70px]"
            src="https://img.icons8.com/ios/100/ffffff/donate.png"
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#00CFE8] rounded-md px-3 py-2 flex justify-between items-center text-white">
        <div>
          <h2 className="text-3xl font-semibold">{usersData?.length || 0}</h2>
          <p className="text-md font-semibold">Users</p>
        </div>
        <div>
          <img
            className="w-[70px]"
            src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-user-cv-resume-flatart-icons-outline-flatarticons.png"
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#1B2850] rounded-md px-3 py-2 flex justify-between items-center text-white">
        <div>
          <h2 className="text-3xl font-semibold">{reviewsData?.length || 0}</h2>
          <p className="text-md font-semibold">Reviews</p>
        </div>
        <div>
          <img
            className="w-[70px]"
            src="https://img.icons8.com/ios/100/ffffff/very-popular-topic.png"
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#28C76F] rounded-md px-3 py-2 flex justify-between items-center text-white">
        <div>
          <h2 className="text-3xl font-semibold">
            {volunteersData?.length || 0}
          </h2>
          <p className="text-md font-semibold">Volunteers</p>
        </div>
        <div>
          <img
            className="w-[70px]"
            src="https://img.icons8.com/parakeet-line/96/ffffff/community-grants.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardGutters;
