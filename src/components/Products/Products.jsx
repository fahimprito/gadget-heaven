import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import { useEffect, useState } from "react";


const Products = () => {
    const [products, setProducts] = useState([]);
    // const allProducts = [...products];
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('/gadgets_inventory.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const { category } = useParams();
    const categoryName = category ? category.replace(/-/g, " ") : "";
    // console.log(category);
    useEffect(() => {
        if (categoryName) {
            const filteredByCategory = [...products].filter(
                product => product.category == categoryName
            )
            setAllProducts(filteredByCategory)
        }
        else {
            setAllProducts(products.slice(0, 6));
        }
    }, [categoryName, products])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                allProducts.length === 0 ? (
                    <div className="rounded-xl bg-white p-4 border col-span-full min-h-60 flex justify-center items-center">
                        <p className="text-4xl text-center text-red-300 font-bold">No Products Found</p>
                    </div>
                ) : (
                    allProducts.map(product => <Product
                        key={product.product_id}
                        product={product}
                    ></Product>)
                )
            }

        </div>
    );
};

export default Products;