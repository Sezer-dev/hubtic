import { IPost, IPostParams } from './posts.interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getAll: builder.query<Array<IPost>, void>({
      query: () => 'posts',
    }),
    getAllById: builder.query<Array<IPost>, number>({
      query: (userId) => {
        return {
          url: 'posts/',
          params: { userId },
        };
      },
    }),
    getPost: builder.query<IPost, number>({
      query: (id) => 'posts/' + id,
    }),
    createPost: builder.query<IPost, IPostParams>({
      query: (body) => {
        return {
          method: 'POST',
          url: '/posts',
          body,
        };
      },
    }),
  }),
});

export const { useGetAllQuery, useGetAllByIdQuery, useGetPostQuery, useCreatePostQuery } = postsApi;
