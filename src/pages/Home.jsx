import HomeBanner from "../components/Banner/HomeBanner";
import Products from "../components/Products/Products";

const Home = () => {
    return (
        <div className="bg-base-200">
            <div>
                <HomeBanner></HomeBanner>
            </div>
            <div className="container mx-auto">
                <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">Explore Cutting-Edge Gadgets</h2>
                <div className="grid grid-cols-4 gap-4 pb-20">
                    {/* categories */}
                    <div className="rounded-xl p-6 grid auto-rows-max gap-4 max-h-fit bg-white">
                        <button className="btn bg-[#9538E2] text-white hover:bg-[#9538E2] font-semibold lg:text-xl rounded-full border-gray-200">
                            All Product
                        </button>
                        <button className="btn text-gray-500 hover:bg-[#9538E2] hover:text-white font-semibold lg:text-xl rounded-full border-gray-200">
                            Laptops
                        </button>
                        <button className="btn text-gray-500 hover:bg-[#9538E2] hover:text-white font-semibold lg:text-xl rounded-full border-gray-200">
                            Phones
                        </button>
                        <button className="btn text-gray-500 hover:bg-[#9538E2] hover:text-white font-semibold lg:text-xl rounded-full border-gray-200">
                            Accessories
                        </button>
                        <button className="btn text-gray-500 hover:bg-[#9538E2] hover:text-white font-semibold lg:text-xl rounded-full border-gray-200">
                            Smart Watches
                        </button>
                        <button className="btn text-gray-500 hover:bg-[#9538E2] hover:text-white font-semibold lg:text-xl rounded-full border-gray-200">
                            MacBook
                        </button>
                        <button className="btn text-gray-500 hover:bg-[#9538E2] hover:text-white font-semibold lg:text-xl rounded-full border-gray-200">
                            Iphone
                        </button>
                    </div>

                    <div className="rounded-xl col-span-3">
                        <Products></Products>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Home;