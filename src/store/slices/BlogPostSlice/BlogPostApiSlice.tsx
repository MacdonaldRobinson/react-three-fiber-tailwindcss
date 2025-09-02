import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { TBlogPost } from "./BlogPostSlice";

const BlogPostApiSlice = createApi({
    reducerPath: "blogPosts",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    endpoints: (builder) => {
        return {
            getBlogPost: builder.query<TBlogPost[], number>({
                query: (limit: number) => `posts?_limit=${limit}`,
            }),
            getBlogPostById: builder.query<TBlogPost, string>({
                query: (id: string) => `posts/${id}`,
            }),
            addBlogPost: builder.mutation<TBlogPost, TBlogPost>({
                query: (newBlogPost: TBlogPost) => {
                    return {
                        url: "posts",
                        method: "POST",
                        body: newBlogPost,
                    };
                },
            }),
        };
    },
});

export default BlogPostApiSlice;
