import BannerImage from "./BannerImage";

const HomeBanner = () => {
    return (
        <div className="relative mb-[60vh]">
            <div className="bg-[#9538E2] flex flex-col gap-6 justify-start items-center text-white text-center p-4 min-h-[70vh] m-4 lg:m-10 rounded-3xl ">

                <h1 className="text-4xl lg:text-6xl font-bold lg:w-2/3 mt-28">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h1>
                <p className="text-base lg:w-1/2">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <button className="btn bg-white text-[#9538E2] font-semibold lg:text-xl rounded-full px-8 z-10 mb-32">
                    Shop Now
                </button>
            </div>
            <div className="absolute inset-x-0 top-[80%] lg:top-[70%]">
                <BannerImage></BannerImage>
            </div>
        </div>
    );
};

export default HomeBanner;