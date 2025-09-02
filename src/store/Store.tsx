import { configureStore } from "@reduxjs/toolkit";

import BlogPostApiSlice from "./slices/BlogPostSlice/BlogPostApiSlice";

const Store = configureStore({
    reducer: {
        [BlogPostApiSlice.reducerPath]: BlogPostApiSlice.reducer, // RTK Query slice
    },
    middleware: (getDefaultMiddlewear) => {
        return getDefaultMiddlewear().concat(BlogPostApiSlice.middleware);
    },
});

export type RootStateType = ReturnType<typeof Store.getState>;
export type AppDispatchType = typeof Store.dispatch;

export default Store;
