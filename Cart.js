// Cart.js
import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart } = useCart();

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      return total + product.productPrice * product.quantity;
    }, 0);
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (<>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, index) => (
              <tr key={index}>
                <td>{product.productName}</td>
                <td>${product.productPrice}</td>
                <td>{product.quantity}</td>
                <td>${product.productPrice * product.quantity}</td>
                <td>
                  <button onClick={() => removeFromCart(product.productName)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Total:</td>
              <td>${calculateTotalPrice()}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
          <div>
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
        </div>
        </>
      )}


    </div>
  );
}

export default Cart;
