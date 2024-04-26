import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import toast from "react-hot-toast"

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://dummyjson.com/products', 
        prepareHeaders: (headers, {getState}) => {
            headers.set("X-CSRF", "value here")
            return headers
        }
    }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "",
            providesTags: (result, error) => {
                if (result) {
                    return ['Product']
                } else {
                    return ['Product-Error']
                }
            }
        })
    })
})

console.log(productApi)
export const { useGetProductsQuery } = productApi