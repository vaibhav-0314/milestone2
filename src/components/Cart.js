// src/components/Cart.js
import React from 'react';
import { useCart } from './CartContext'; // Use the custom hook to access the cart context

const Cart = () => {
  const { cart, addItemToCart, removeItemFromCart, calculateTotal } = useCart(); // Get cart data and functions from context

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <span>{item.name} (x{item.quantity}) - ${item.price * item.quantity}</span>
              <button onClick={() => removeItemFromCart(item)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${calculateTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
