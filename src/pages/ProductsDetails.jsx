import { useLoaderData, useParams } from "react-router-dom";
import { TbShoppingCart } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import ProductDetailsBanner from "../components/Banner/ProductDetailsBanner";



const ProductsDetails = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const product = data.find(product => product.product_id === product_id);

    const { product_title, product_image, price, description, specification, rating } = product;

    return (
        <div className="bg-base-200 border">
            <div className="">
                <ProductDetailsBanner></ProductDetailsBanner>
            </div>

            <div className="container mx-auto bg-white rounded-2xl p-4 lg:p-6 border grid grid-cols-1 md:grid-cols-12 gap-10 mb-10 -mt-20 md:-mt-36">

                <img className="mx-auto rounded-xl p-10 md:col-span-5" src={product_image} alt="" />

                <div className="flex flex-col gap-8 md:col-span-7">

                    <div className="flex justify-between items-center ">
                        <h5 className="text-5xl font-bold title-font w-2/3">{product_title}</h5>
                    </div>
                    <div>
                        <h5 className="text-2xl font-semibold text-gray-600 ">Price: ${price}</h5>
                    </div>
                    <div>
                        <p
                            className="badge text-[#23BE0A] text-base bg-[#22be0a11] border border-[#23BE0A] p-4">
                            In Stock
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-gray-500 ">
                            {description}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Specification:</h3>
                        <ol className="list-decimal list-inside text-lg text-gray-600">
                            {
                                specification.map((spac, index) => <li key={index}>{spac}</li>)
                            }
                        </ol>
                    </div>
                    <div>
                        <h5 className="text-xl font-bold mb-4">Rating: </h5>
                        <p className="font-normal">{rating} ⭐⭐⭐⭐</p>
                    </div>

                    <div className="flex gap-4">

                        <button className="btn font-semibold lg:text-xl rounded-full border-gray-200 bg-[#9538E2] hover:bg-[#8126cc] text-white hover:text-white px-6">Add To Card <TbShoppingCart /></button>
                        <button><div className="text-xl border border-gray-300 p-3 rounded-full"><FaRegHeart /></div></button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ProductsDetails;