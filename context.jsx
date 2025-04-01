'use client'
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openForm = (product) => setSelectedProduct(product);
  const closeForm = () => setSelectedProduct(null);

  return (
    <CartContext.Provider value={{ selectedProduct, openForm, closeForm }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);