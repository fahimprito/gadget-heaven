import { useContext, useEffect } from "react";
import WishItem from "./WishItem";
import { getFullWishList, removeWishList } from "../../utils/utilsForLocal";
import { WishlistItem } from "../layouts/MainLayout";


const AllWishItem = () => {
    const [wishProduct, setWishProduct] = useContext(WishlistItem);

    useEffect(() => {
        const product = getFullWishList();
        setWishProduct(product);

    }, [setWishProduct])

    const handleRemove = (id) => {
        removeWishList(id)
        const wishItem = getFullWishList()
        setWishProduct(wishItem)
    }

    return (
        <div>
            {
                wishProduct.length === 0 ? (
                    <div className="p-4">
                        <p className="text-4xl text-center text-red-300 font-bold">Wishlist is empty</p>
                    </div>
                ) : (
                    wishProduct.map(product => <WishItem
                        key={product.product_id}
                        product={product}
                        handleRemove={handleRemove}
                    ></WishItem>)
                )
            }

        </div>
    );
};

export default AllWishItem;