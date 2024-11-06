

const DashboardBanner = () => {
    return (
        <div>
            <div className="bg-[#9538E2]">
                <div className="flex flex-col gap-6 text-white py-10 md:py-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-center ">Dashboard</h2>
                    <p className="text-base text-center px-5 w-10/12 lg:w-1/2 mx-auto">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <div className="flex gap-4 justify-center mt-2">
                        <button className="btn btn-outline text-white hover:bg-[#0000003b] hover:border-none font-semibold lg:text-xl rounded-full px-8">
                            Cart
                        </button>
                        <button className="btn bg-white text-[#9538E2] font-semibold lg:text-xl rounded-full px-8">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardBanner;