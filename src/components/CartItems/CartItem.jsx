import { MdOutlineCancel } from "react-icons/md";
import PropTypes from 'prop-types';

const CartItem = ({ product, handleRemove }) => {
    const { product_id, product_image, product_title, description, price } = product;

    return (
        <div>
            <div className="flex justify-between items-center bg-white rounded-2xl p-4 mb-4">
                <div className="flex items-center gap-4">
                    <img className="w-36 rounded-2xl object-cover" src={product_image} alt="" />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold">{product_title}</h2>
                        <p className="text-lg text-gray-600">{description}</p>
                        <p className="text-lg text-gray-600 font-bold">${price}</p>
                    </div>

                </div>
                <button
                    onClick={() => handleRemove(product_id)}
                    className="text-4xl text-red-500 hover:bg-gray-200 rounded-full mr-10">
                    <MdOutlineCancel />
                </button>

            </div>
        </div>
    );
};

CartItem.propTypes = {
    product: PropTypes.object,
    handleRemove: PropTypes.func,
};

export default CartItem;