import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: (page = 0) => `contacts?page=${page}`,
    }),
    getContactByID: builder.query({
      query: (id) => `contacts/${id}`,
    }),
    searchContact: builder.query({
      query: (q) => `search?q=${q}`,
    }),
    addContact: builder.mutation({
      query: (newContact) => ({
        url: `/contacts`,
        method: "POST",
        body: newContact,
      }),
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `contacts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useSearchContactQuery,
} = contactsApi;
