import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./store/Store";

// Dynamically determine the base path from the environment variable or use '/' by default
const basePath = import.meta.env.VITE_BASE_PATH || "/";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomePage />,
        },
    ],
    {
        basename: basePath,
    }
);

function App() {
    return (
        <Provider store={Store}>
            <Suspense fallback={"Loading ..."}>
                <RouterProvider router={router} />
            </Suspense>
        </Provider>
    );
}

export default App;
