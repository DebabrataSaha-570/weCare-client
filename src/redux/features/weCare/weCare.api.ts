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
  useGetFoodSuppliesQuery,
  useDeleteFoodSupplyMutation,
  useGetSingleFoodSupplyQuery,
  useUpdateSingleSupplyMutation,
  useGetNewsDataQuery,
} = weCareApi;
