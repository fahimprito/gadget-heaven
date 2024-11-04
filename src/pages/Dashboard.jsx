import DashboardBanner from "../components/Banner/DashboardBanner";


const Dashboard = () => {
    return (
        <div className="bg-base-200">
            <div>
                <DashboardBanner></DashboardBanner>
            </div>
            <div className="container mx-auto">
                <div className="py-10">
                    <h2 className="text-4xl font-bold">Dashboard</h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;