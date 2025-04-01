"use client";
import { useCart } from "@/context";
import "./form.css";
import { useState } from "react";

const OrderForm = () => {
  const { selectedProduct, closeForm } = useCart();

  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const handleSubmit = async (e) => {

    const orderText = `
      Нове замовлення\n
Товар: ${selectedProduct.firm} ${selectedProduct.name}
Ціна за штуку: ${selectedProduct.price}грн
Кількість: ${selectedProduct.quantity}
Загаальна вартість: ${
  selectedProduct.price * selectedProduct.quantity
}грн\n
Замовник: ${userName}
Телефон: ${userPhone}
      `;
    
    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: orderText }),
      });

      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.log("Помилка при відправці замовлення.");
    }
  };

  return (
    <div className={`order-form-bg ${selectedProduct ? "" : "hidden"}`}>
      <div className="order-form">
        <h2 className="order-form-title">Оформлення замовлення</h2>
        <p className="order-form-text">Товар: {selectedProduct?.name}</p>
        <p className="order-form-text">
          Ціна: {selectedProduct?.price * selectedProduct?.quantity}грн
        </p>
        <input
          type="text"
          placeholder="Ваше ім'я"
          className="order-form-inpt"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Телефон"
          className="order-form-inpt"
          onChange={(e) => setUserPhone(e.target.value)}
        />
        <button className="order-form-btn" onClick={handleSubmit}>
          Замовити
        </button>
        <button
          className="order-form-btn-close"
          onClick={closeForm}
          type="button"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default OrderForm;
