import constants from "@/settings/constants";
import webStorageClient from "@/utils/webStorageClient";
import { createApi, fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
interface CustomExtraOptions {
    skipAuth?: boolean;
}

const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, CustomExtraOptions> = async (args, api, extraOptions) => {
    const baseQuery = fetchBaseQuery({
        baseUrl: constants.API_SERVER,
        prepareHeaders: (headers) => {
            const accessToken = webStorageClient.getToken();
            headers.set('Access-Control-Allow-Origin', '*');
            if (!extraOptions?.skipAuth && accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`);
            }

            return headers;
        },
        mode: 'cors',
    })

    return baseQuery(args, api, extraOptions);
}

export const baseApi = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({})
})