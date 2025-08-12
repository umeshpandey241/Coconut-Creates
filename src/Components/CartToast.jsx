import React from "react";
import { useCart } from "../context/useCart";

const CartToast = () => {
  const { showToast, toggleCart, setShowToast } = useCart();

  if (!showToast) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-4 z-50">
      <span>Item added to cart</span>
      <button
        onClick={() => {
          toggleCart();
          setShowToast(false);
        }}
        className="text-orange-400 font-semibold"
      >
        GO TO CART
      </button>
    </div>
  );
};

export default CartToast;
