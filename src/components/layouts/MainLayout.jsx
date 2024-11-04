import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import HomeBanner from "../Banner/HomeBanner";
import StatisticsBanner from "../Banner/StatisticsBanner";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <HomeBanner></HomeBanner> */}
            <StatisticsBanner></StatisticsBanner>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;