import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `contact`,
    }),
    getContactByID: builder.query({
      query: (id) => `contact/${id}`,
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
