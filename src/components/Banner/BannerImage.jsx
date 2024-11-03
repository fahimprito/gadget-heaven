import bannerImg from "../../assets/banner.jpg"

const BannerImage = () => {
    return (
        <div className="w-9/12 lg:w-2/3 mx-auto ">
            <div className="bg-[#ffffff2d] border p-4 rounded-2xl">
                <img className="rounded-2xl w-full max-h-[65vh] object-cover" src={bannerImg} alt="" />

            </div>
        </div>
    );
};

export default BannerImage;