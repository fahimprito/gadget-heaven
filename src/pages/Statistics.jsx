import StatisticsBanner from "../components/Banner/StatisticsBanner";


const Statistics = () => {
    return (
        <div className="bg-base-200">
            <div>
                <StatisticsBanner></StatisticsBanner>
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