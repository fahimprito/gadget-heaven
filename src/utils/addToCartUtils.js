import { toast } from "react-toastify";


const getFullCartList = () => {
    const all = localStorage.getItem('cartItem')

    if (all) {
        const cartItem = JSON.parse(all)
        return cartItem
    } else {
        return []
    }
}

const addCartItem = (product) => {
    // console.log(product);

    const cartItem = getFullCartList()
    const isExist = cartItem.find(item => item.product_id == product.product_id)
    if (isExist) {
        toast.error('Already exists in your cart!');
        return;
    }
    else {
        cartItem.push(product)
        localStorage.setItem('cartItem', JSON.stringify(cartItem))
        toast.success(`${product.product_title} added to your cart!`)
    }

}

const removeCartItem = (id) => {
    // get all previously saved data
    const cartItem = getFullCartList()
    const remaining = cartItem.filter(product => product.product_id != id)
    localStorage.setItem('cartItem', JSON.stringify(remaining))
    toast.warn('A product removed from cart!')
}

const clearCartItems = () => {
    localStorage.removeItem("cartItem");
}

export { getFullCartList, addCartItem, removeCartItem, clearCartItems }