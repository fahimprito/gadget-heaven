import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from "react";
import { HelmetProvider } from "react-helmet-async";

export const AddToCartItem = createContext([]);
export const WishlistItem = createContext([]);

const MainLayout = () => {
    const [cartProduct, setCartProduct] = useState([]);
    const [wishProduct, setWishProduct] = useState([]);

    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                closeOnClick={true}
                draggable={true}
            />
            <HelmetProvider>
                <AddToCartItem.Provider value={[cartProduct, setCartProduct]}>
                    <WishlistItem.Provider value={[wishProduct, setWishProduct]}>

                        <Navbar></Navbar>
                        <div>
                            <Outlet></Outlet>
                        </div>
                        <Footer></Footer>

                    </WishlistItem.Provider>
                </AddToCartItem.Provider>
            </HelmetProvider>
        </div>
    );
};

export default MainLayout;