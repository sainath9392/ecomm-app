// src/components/Invoice.jsx
import { useCart } from '../context/CartContext';
import './Invoice.css';

const Invoice = () => {
    const { cart } = useCart();
    const total = cart.reduce((sum, item) => sum + item.pcost * item.quantity, 0);

    const handlePayment = () => {
        alert("Payment Successful!");
        // You can clear the cart or store to DB here
    };

    return (
        <div className="invoice-page">
            <h2>Invoice</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, idx) => (
                        <tr key={idx}>
                            <td>{item.pname}</td>
                            <td>{item.quantity}</td>
                            <td>₹{item.pcost}</td>
                            <td>₹{item.pcost * item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>Total: ₹{total}</h3>
            <button className="pay-btn" onClick={handlePayment}>Pay Now</button>
        </div>
    );
};

export default Invoice;
