import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import { useEffect, useState } from "react";


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./gadgets_inventory.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const obj = useParams();
    // console.log(obj);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                products.map(product => <Product
                    key={product.product_id}
                    product={product}
                ></Product>)
            }
            
        </div>
    );
};

export default Products;