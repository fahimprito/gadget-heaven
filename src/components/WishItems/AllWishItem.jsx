import { useEffect, useState } from "react";
import WishItem from "./WishItem";
import { getFullWishList, removeWishList } from "../../utils/utilsForLocal";


const AllWishItem = () => {
    const [wishProduct, setWishProduct] = useState([]);

    useEffect(() => {
        const product = getFullWishList();
        setWishProduct(product);

    }, [])

    const handleRemove = (id) => {
        removeWishList(id)
        const wishItem = getFullWishList()
        setWishProduct(wishItem)
    }

    return (
        <div>
            {
                wishProduct.map(product => <WishItem
                    key={product.product_id}
                    product={product}
                    handleRemove={handleRemove}
                ></WishItem>)
            }

        </div>
    );
};

export default AllWishItem;