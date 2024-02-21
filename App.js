import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import ResturantMenu from "./src/components/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./src/components/Shimmer";
// import Grocery from "./src/components/Grocery";
const AppLayout = () => {
    return <>
        <Header />
        <Outlet/>
    </>;
}
const Grocery = React.lazy(() => import("./src/components/Grocery"));
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
                element: <ResturantMenu />
            },
            {
                path: "/About",
                element: <About />
            },
            {
                path: "/grocery",
                element: (
                    <React.Suspense fallback={<Shimmer/>}>
                        <Grocery/>
                    </React.Suspense>
                )
            }
        ],
        errorElement: <Error />
    },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);