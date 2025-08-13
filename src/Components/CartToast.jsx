import React from "react";
import { useCart } from "../context/useCart";

const CartToast = () => {
  const { showToast, toggleCart, setShowToast } = useCart();

  if (!showToast) return null;

  return (
    <div
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2 
        bg-black text-white 
        px-4 py-3 sm:px-6 sm:py-4 
        rounded-lg shadow-lg 
        flex flex-col sm:flex-row items-center gap-2 sm:gap-4 
        z-50 max-w-[90%] sm:max-w-max
        text-sm sm:text-base
      "
    >
      <span className="text-center sm:text-left">Item added to cart</span>
      <button
        onClick={() => {
          toggleCart();
          setShowToast(false);
        }}
        className="text-orange-400 font-semibold hover:underline"
      >
        GO TO CART
      </button>
    </div>
  );
};

export default CartToast;