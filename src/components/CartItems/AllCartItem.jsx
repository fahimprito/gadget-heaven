import { useContext, useEffect } from "react";
import CartItem from "./CartItem";
import { AddToCartItem } from "../layouts/MainLayout";
import { getFullCartList, removeCartItem } from "../../utils/addToCartUtils";


const AllCartItem = () => {
    const [cartProduct, setCartProduct] = useContext(AddToCartItem);
    // console.log(cartProduct);
    useEffect(() => {
        const product = getFullCartList();
        setCartProduct(product);
    }, [setCartProduct])

    const handleRemove = (id) => {
        removeCartItem(id)
        const wishItem = getFullCartList()
        setCartProduct(wishItem)
    }

    return (
        <div>
            {
                cartProduct.length === 0 ? (
                    <div className="p-4">
                        <p className="text-4xl text-center text-red-300 font-bold">Cart is empty</p>
                    </div>
                ) : (
                    cartProduct.map(product => <CartItem
                        key={product.product_id}
                        product={product}
                        handleRemove={handleRemove}
                    ></CartItem>)
                )
            }

        </div>
    );
};

export default AllCartItem;