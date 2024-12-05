import { baseApi } from "../baseApi";

export const demoApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDemo: builder.query<any, {amount: number}>({
            query: (param) => ({
                url: '',
                params: param,
                flashError: true,
                method: 'GET',
            }),
        }),
    }),
})

export const { useGetDemoQuery } = demoApi