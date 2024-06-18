import { baseApi } from "../../api/api";

const weCareApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFoodSupplies: builder.query({
      query: (category) => ({
        url: `/supplies?category=${category}`,
        method: "GET",
      }),
      providesTags: ["foods"],
    }),
    getNewsData: builder.query({
      query: () => ({
        url: "/latest-news",
        method: "GET",
      }),
    }),
    getTestimonialsData: builder.query({
      query: () => ({
        url: "/testimonials",
        method: "GET",
      }),
      providesTags: ["foods"],
    }),
    getVolunteersData: builder.query({
      query: () => ({
        url: "/volunteers",
        method: "GET",
      }),
      providesTags: ["foods"],
    }),
    getGratitudesData: builder.query({
      query: () => ({
        url: "/gratitudes",
        method: "GET",
      }),
      providesTags: ["foods"],
    }),
    getUsersData: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["foods"],
    }),
    getSingleFoodSupply: builder.query({
      query: (id) => ({
        url: `/supply/${id}`,
        method: "GET",
      }),
      providesTags: ["foods"],
    }),
    createFoodItem: builder.mutation({
      query: (data) => {
        return {
          url: "/create-supply",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["foods"],
    }),
    createTestimonial: builder.mutation({
      query: (data) => {
        return {
          url: "/create-testimonial",
          method: "POST",
          body: data,
        };
      },
    }),
    addVolunteer: builder.mutation({
      query: (data) => {
        return {
          url: "/add-volunteer",
          method: "POST",
          body: data,
        };
      },
    }),
    addGratitude: builder.mutation({
      query: (data) => {
        return {
          url: "/add-gratitude",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["foods"],
    }),
    updateSingleSupply: builder.mutation({
      query: (options) => {
        return {
          url: `/supply/${options.id}`,
          method: "PUT",
          body: options.data,
        };
      },
      invalidatesTags: ["foods"],
    }),
    updateUserRole: builder.mutation({
      query: (options) => {
        return {
          url: `/userRole/${options._id}`,
          method: "PUT",
          body: options,
        };
      },
      invalidatesTags: ["foods"],
    }),
    deleteFoodSupply: builder.mutation({
      query: (id) => {
        return {
          url: `/delete-supply/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["foods"],
    }),
    userRegister: builder.mutation({
      query: (data) => {
        return {
          url: "/register",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["foods"],
    }),
  }),
});

export const {
  useCreateFoodItemMutation,
  useCreateTestimonialMutation,
  useGetFoodSuppliesQuery,
  useGetTestimonialsDataQuery,
  useGetGratitudesDataQuery,
  useGetUsersDataQuery,
  useDeleteFoodSupplyMutation,
  useGetSingleFoodSupplyQuery,
  useUpdateSingleSupplyMutation,
  useUpdateUserRoleMutation,
  useGetNewsDataQuery,
  useAddVolunteerMutation,
  useAddGratitudeMutation,
  useGetVolunteersDataQuery,
} = weCareApi;
