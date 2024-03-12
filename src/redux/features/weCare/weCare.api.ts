import { baseApi } from "../../api/api";

const weCareApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFoodSupplies: builder.query({
      query: () => ({
        url: "/supplies",
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
    }),
    getVolunteersData: builder.query({
      query: () => ({
        url: "/volunteers",
        method: "GET",
      }),
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
  useDeleteFoodSupplyMutation,
  useGetSingleFoodSupplyQuery,
  useUpdateSingleSupplyMutation,
  useGetNewsDataQuery,
  useAddVolunteerMutation,
  useGetVolunteersDataQuery,
} = weCareApi;
