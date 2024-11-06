import AllWishItem from "../WishItems/AllWishItem";


const Wishlist = () => {
    return (
        <div>
            <div className="flex max-sm:justify-center">
                <h2 className="text-4xl font-bold py-1">Wishlist</h2>
            </div>

            <div className="py-10">


                <AllWishItem></AllWishItem>
            </div>
        </div>
    );
};

export default Wishlist;