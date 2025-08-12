import React from "react";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router-dom";

const CartSidebar = () => {
  const navigate = useNavigate();
  const {
    isCartOpen,
    cartItems,
    // removeFromCart,
    toggleCart,
    increaseQuantity,
    decreaseQuantity,
    closeCart,
    totalAmount,
  } = useCart();

  return (
    <>
      {/* Background blur */}
      {isCartOpen && (
        <div
          onClick={closeCart}
          className="fixed inset-0 backdrop-blur-sm bg-black/10 z-30"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-4 transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={toggleCart} className="text-xl">
            &times;
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4 overflow-y-auto max-h-[70%]">
              {cartItems.map((item) => (
                <li key={item.id} className="border-b pb-2">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">₹{item.price * item.quantity}</p>
                      {/* <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 text-sm mt-1"
                      >
                        Remove
                      </button> */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Checkout Button */}
            <div className="mt-6">
              <button
                onClick={() => {
                  closeCart();
                  navigate("/pay");
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
              >
                Checkout ₹{totalAmount}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
