import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Products from "../components/Products/Products";
import ProductsDetails from "../pages/ProductsDetails";
import Faq from "../pages/Faq";
import Cart from "../components/Cart/Cart";
import Wishlist from "../components/Wishlist/Wishlist";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/gadgets_category.json"),
                children: [
                    {
                        path: "/category/:category",
                        element: <Products></Products>
                    }
                ]
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch('/gadgets_inventory.json')
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "/dashboard",
                        element: <Cart></Cart>,
                    },
                    {
                        path: "/dashboard/cart",
                        element: <Cart></Cart>,
                    },
                    {
                        path: "/dashboard/wishlist",
                        element: <Wishlist></Wishlist>,
                    },
                ],
            },
            {
                path: "/faq",
                element: <Faq></Faq>,
                loader: () => fetch('/faq.json')
            },
            {
                path: "/product/:product_id",
                element: <ProductsDetails></ProductsDetails>,
                loader: () => fetch('/gadgets_inventory.json')
            },
        ]
    },
]);

export default router;