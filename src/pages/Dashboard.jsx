import { Outlet } from "react-router-dom";
import DashboardBanner from "../components/Banner/DashboardBanner";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {
    return (
        <div className="bg-base-200">
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div>
                <DashboardBanner></DashboardBanner>
            </div>
            <div className="container mx-auto">
                <div className="py-10 px-4">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;