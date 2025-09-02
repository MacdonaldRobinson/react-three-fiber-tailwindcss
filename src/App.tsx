import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./store/Store";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
]);

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
