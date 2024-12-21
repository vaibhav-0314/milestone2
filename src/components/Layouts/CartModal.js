import React, { useState } from "react";
import { Modal, Button, ListGroup, Col, Row } from "react-bootstrap";
import "../../styles/CartStyle.css";

const CartModal = ({ show, onClose }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Burger", price: 100, quantity: 1 },
    { id: 2, name: "Pizza", price: 200, quantity: 2 },
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleChangeQuantity = (id, change) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + change } : item
    ));
  };

  const handleCheckout = () => {
    alert("Order Placed");
    setCartItems([]);  // Clear cart after checkout
    onClose();  // Close the modal after checkout
  };

  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <div className="cart-empty">Your cart is empty!</div>
        ) : (
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col sm={8}>
                    <h5>{item.name}</h5>
                    <p>Price: ₹{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </Col>
                  <Col sm={4} className="text-right">
                    <Button variant="outline-secondary" onClick={() => handleChangeQuantity(item.id, -1)} disabled={item.quantity === 1}>-</Button>
                    <Button variant="outline-secondary" onClick={() => handleChangeQuantity(item.id, 1)} className="ms-2">+</Button>
                    <Button variant="danger" onClick={() => handleRemoveItem(item.id)} className="ms-2">Remove</Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
        <Button variant="primary" onClick={handleCheckout}>Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
