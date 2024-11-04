import { Outlet, useLoaderData } from "react-router-dom";
import HomeBanner from "../components/Banner/HomeBanner";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";

const Home = () => {
    const categories = useLoaderData();

    return (
        <div className="bg-base-200">
            <div>
                <HomeBanner></HomeBanner>
            </div>
            <div className="container mx-auto">
                <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">Explore Cutting-Edge Gadgets</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-20 mx-4">
                    {/* categories */}
                    <div>
                        <Categories categories={categories}></Categories>
                    </div>

                    <div className="rounded-xl md:col-span-2 lg:col-span-3">
                        <Products></Products>
                        {/* <Outlet></Outlet> */}

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Home;