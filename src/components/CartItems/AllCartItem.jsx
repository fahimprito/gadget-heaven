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
                 cartProduct.map(product => <CartItem
                    key={product.product_id}
                    product={product}
                    handleRemove={handleRemove}
                ></CartItem>)
            }

        </div>
    );
};

export default AllCartItem;