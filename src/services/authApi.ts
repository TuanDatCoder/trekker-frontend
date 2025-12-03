// src/services/authApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../constants/endpoints';
import type { LoginRequest } from '../types/requests/LoginRequest';
import type { RegisterRequest } from '../types/requests/RegisterRequest';
import type { LoginResponse } from '../types/responses/LoginResponse';
import type { ApiResponse } from '../types/responses/ApiResponse';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL + 'auth',
    credentials: 'include', 
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['Auth'],

  endpoints: (builder) => ({
    register: builder.mutation<ApiResponse<string | null>, RegisterRequest>({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
      }),
    }),

    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),
    logout: builder.mutation<ApiResponse<string | null>, void>({
      query: () => ({
        url: '/logout',
        method: 'GET',
      }),
      invalidatesTags: ['Auth'],
    }),

    verifyEmail: builder.mutation<ApiResponse<string | null>, string>({
      query: (token) => ({
        url: `/verify/${token}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useVerifyEmailMutation,
} = authApi;