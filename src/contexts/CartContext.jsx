import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const addToCart = (item) => {
    const existingItem = cart.find(
      i => i.id === item.id && i.color === item.color && i.memory === item.memory
    );
    
    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map(i =>
        i.id === item.id && i.color === item.color && i.memory === item.memory
          ? { ...i, quantity: i.quantity + 1 }
          : i
      );
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }];
    }
    
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (index, quantity) => {
    if (quantity < 1) return;
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    sessionStorage.removeItem('cart');
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};