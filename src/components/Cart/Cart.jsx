import { NavLink } from "react-router-dom";
import { PiSlidersLight } from "react-icons/pi";
import AllCartItem from "../CartItems/AllCartItem";
import { useContext, useEffect, useState } from "react";
import { AddToCartItem } from "../layouts/MainLayout";

const Cart = () => {
    const [cartProduct, setCartProduct] = useContext(AddToCartItem);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const cartPrice = cartProduct.reduce((sum, product) => sum + product.price, 0);
        setTotalPrice(cartPrice);

    }, [cartProduct])

    const handleSortbyPrice = () => {
        const sortedProducts = [...cartProduct].sort((a, b) => b.price - a.price);
        setCartProduct(sortedProducts);
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
                        className="btn bg-gradient-to-b from-[#9538E2] to-[#c300ff] ... text-white font-semibold lg:text-xl rounded-full px-4 sm:px-8">
                        Purchase
                    </NavLink>

                </div>
            </div>

            <div className="py-10">

                <AllCartItem></AllCartItem>

            </div>

        </div>
    );
};

export default Cart;