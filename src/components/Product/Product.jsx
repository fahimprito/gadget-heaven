// import s24ultra from "../../assets/s24-ultra.jpeg"
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { product_id, product_title, product_image, price } = product;

    return (
        <div>
            <div className="rounded-xl bg-white p-4 border">
                <img className="mx-auto w-2/3 rounded-xl" src={product_image} alt="" />
                <div className="flex flex-col items-start gap-3 mt-3 ">

                    <h2 className="font-bold text-xl flex gap-4 items-center">{product_title}</h2>
                    <h4 className="flex gap-4 items-center text-gray-500">Price: ${price}</h4>
                    <Link
                        to={`/product/${product_id}`}
                        className="btn btn-outline text-[#9538E2] hover:bg-[#9538E2] hover:border-none font-semibold lg:text-xl rounded-full px-8">
                        View Details
                    </Link>
                </div>

            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
};


export default Product;