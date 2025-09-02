import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type TBlogPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type TBlogPostSliceState = {
    blogPosts: TBlogPost[];
};

const initialState: TBlogPostSliceState = {
    blogPosts: [],
};

const BlogPostSlice = createSlice({
    name: "blogPostSlice",
    initialState: initialState,
    reducers: {
        addBlogPost: (state, actions: PayloadAction<TBlogPost>) => {
            state.blogPosts.push(actions.payload);
        },
    },
});

export default BlogPostSlice;
