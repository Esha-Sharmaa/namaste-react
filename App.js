import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import ResturantMenu from "./src/components/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
const AppLayout = () => {
    return <>
        <Header />
        <Outlet/>
    </>;
}

const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element:<Body/>
            },
            {
                path: "/Cart",
                element: <Cart />
            },
            {
                path: "/resturantMenu/:resID",
                element:<ResturantMenu />
            }
        ],
        errorElement: <Error />
    },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);