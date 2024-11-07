import { NavLink, useNavigate } from "react-router-dom";
import { PiSlidersLight } from "react-icons/pi";
import AllCartItem from "../CartItems/AllCartItem";
import { useContext, useEffect, useState } from "react";
import { AddToCartItem } from "../layouts/MainLayout";
import tikLogo from "../../assets/Group.png"
import { clearCartItems } from "../../utils/addToCartUtils";

const Cart = () => {
    const [cartProduct, setCartProduct] = useContext(AddToCartItem);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const cartPrice = cartProduct.reduce((sum, product) => sum + product.price, 0);
        setTotalPrice(cartPrice);

    }, [cartProduct])

    const handleSortbyPrice = () => {
        const sortedProducts = [...cartProduct].sort((a, b) => b.price - a.price);
        setCartProduct(sortedProducts);
    }

    const handlePurchase = () => {
        document.getElementById('purchase_modal').showModal();
    }
    const handleCloseModal = () => {
        setCartProduct([]);
        clearCartItems();
        navigate("/");
    }

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <h2 className="text-4xl font-bold">Cart</h2>
                <div className="flex items-center md:gap-8 gap-2 max-sm:mt-4">
                    <h3 className="text-lg sm:text-2xl font-bold">Total cost: ${totalPrice}</h3>
                    <NavLink
                        onClick={handleSortbyPrice}
                        className="btn btn-outline text-[#9538E2] hover:bg-[#7e2bc2] hover:border-[#9538E2] font-semibold lg:text-xl rounded-full px-4 sm:px-8">
                        Sort by Price <PiSlidersLight />
                    </NavLink>
                    <NavLink
                        onClick={handlePurchase}
                        disabled={cartProduct.length === 0 || totalPrice === 0}
                        className="btn bg-[#9538E2] hover:bg-[#6f22ad] text-white font-semibold lg:text-xl rounded-full px-4 sm:px-8">
                        Purchase
                    </NavLink>

                </div>
            </div>

            <div className="py-10">

                <AllCartItem></AllCartItem>

            </div>

            {/* modal */}
            <div>
                <dialog id="purchase_modal" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box flex flex-col items-center">
                        <img className="py-7" src={tikLogo} alt="tik logo" />
                        <h3 className="text-3xl font-bold">Payment Successful!</h3>
                        <div className="divider"></div>
                        <p className="text-xl text-gray-500 pb-4">Thanks for Purchasing.</p>
                        <h3 className="text-xl text-gray-500 ">Total cost: ${totalPrice}</h3>
                        <div className="modal-action grid grid-cols-1 w-full">
                            <form method="dialog">
                                <button
                                    onClick={handleCloseModal}
                                    className="btn bg-[#9538e233] hover:bg-[#9538e262] text-lg w-full px-10 rounded-full">
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>

        </div>
    );
};

export default Cart;