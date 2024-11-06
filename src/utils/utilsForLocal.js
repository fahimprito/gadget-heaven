import { toast } from "react-toastify";


const getFullWishList = () => {
    const all = localStorage.getItem('wishList')

    if (all) {
        const wishList = JSON.parse(all)
        return wishList
    } else {
        return []
    }
}

const addWishList = (product) => {
    // console.log(product);

    const wishList = getFullWishList()
    const isExist = wishList.find(item => item.product_id == product.product_id)
    if (isExist) {
        toast.error('Already exists in your wishlist!');
        return;
    }
    else {
        wishList.push(product)
        localStorage.setItem('wishList', JSON.stringify(wishList))
        toast.success(`${product.product_title} added to your wishlist!`)
    }

}

const removeWishList = (id) => {
    // get all previously saved data
    const wishList = getFullWishList()
    const remaining = wishList.filter(product => product.product_id != id)
    localStorage.setItem('wishList', JSON.stringify(remaining))
    toast.warn('A removed from wishlist!')
}

export { getFullWishList, addWishList, removeWishList }