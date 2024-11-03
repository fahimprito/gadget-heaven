import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/statistics",
                element: <Statistics></Statistics>
            },
            {
                path:"/dashboard",
                element: <Dashboard></Dashboard>
            },
        ]
    },
]);

export default router;