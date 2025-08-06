import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./DetailedProduct.css";
import CartIcon from "./CartIcon";
import { useCart } from "../context/CartContext"; // ✅ Correct way
const DetailedProduct = () => {
    const location = useLocation();
    const { addToCart } = useCart(); // ✅ Extract from hook
    const product = location.state;
    const { pimage, pname, pcost, pqty } = product;
    const [quantity, setQuantity] = useState(1);
    const increaseQty = () => {
        if (quantity < pqty) {
            setQuantity(quantity + 1);
        }
    };
    const decreaseQty = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleAddToCart = () => {
        addToCart(product, quantity);
        alert("Item added to cart");
    };
    return (
        <div className="product-detail-container">
            <CartIcon />
            <div className="product-detail-card">
                <img src={pimage} alt={pname} className="product-image" />
                <div className="product-info">
                    <h2>{pname}</h2>
                    <p><strong>Price:</strong> ₹{pcost}</p>
                    <div className="quantity-control">
                        <button onClick={decreaseQty}>-</button>
                        <span>{quantity}</span>
                        <button onClick={increaseQty}>+</button>
                    </div>
                    <button className="add-to-cart-btn" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailedProduct;
