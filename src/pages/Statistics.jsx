import Banner from "../components/Banner/Banner";


const Statistics = () => {
    return (
        <div className="bg-base-200">
            <div>
                <Banner
                    title={"Statistics"}
                    description={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}
                ></Banner>
            </div>
            <div className="container mx-auto">
                <div className="py-10">
                    <h2 className="text-4xl font-bold">Statistics</h2>
                </div>
            </div>
        </div>
    );
};

export default Statistics;