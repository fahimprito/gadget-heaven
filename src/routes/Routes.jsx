import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Products from "../components/Products/Products";
import ProductsDetails from "../pages/ProductsDetails";
import Faq from "../pages/Faq";


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
                element: <Dashboard></Dashboard>
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