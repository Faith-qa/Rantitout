import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const api = createApi({
    baseUrl: import.meta.env.REACT_APP_BASE_URL,
    tagTypes:[],
    enpoints: (build) => ({
        postAiText: build.mutation({
            query: (payload) => ({
                url: "api/vi/openai",
                method: "POST",
                body: payload,
            }),
        }),
    }),
});

export const {usePostAiTextMutation} = api;