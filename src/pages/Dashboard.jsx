import { Outlet } from "react-router-dom";
import DashboardBanner from "../components/Banner/DashboardBanner";


const Dashboard = () => {
    return (
        <div className="bg-base-200">
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