import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Helmet } from "react-helmet-async";


const Statistics = () => {
    const data = useLoaderData();

    const productData = data.map(product => ({
        product_title: product.product_title,
        price: product.price,
    }));

    return (
        <div className="bg-base-200">
            <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>
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

                <div className="py-10">
                    <ResponsiveContainer width="100%" height={450} >
                        <BarChart
                            width={500}
                            height={300}
                            data={productData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="product_title"
                                tickFormatter={(value) => value.length > 5 ? `${value.slice(0, 5)}...` : value}
                            />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="price" fill="#9538E2" />
                        </BarChart>
                    </ResponsiveContainer>

                </div>
            </div>
        </div>
    );
};

export default Statistics;