import BannerImage from "./BannerImage";

const HomeBanner = () => {
    return (
        <div className="mb-10 md:mb-20">
            <div className="bg-[#9538E2] flex flex-col gap-6 justify-start items-center text-white text-center p-4 min-h-[70vh] mx-4 lg:mx-10 rounded-3xl -mt-10">

                <h1 className="text-4xl lg:text-6xl font-bold lg:w-2/3 mt-20">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h1>
                <p className="text-base lg:w-1/2">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button className="btn bg-white text-[#9538E2] font-semibold lg:text-xl rounded-full px-8 z-10 mb-32">
                    Shop Now
                </button>
            </div>
            <div className="-mt-28 md:-mt-60">
                <BannerImage></BannerImage>
            </div>
        </div>
    );
};

export default HomeBanner;