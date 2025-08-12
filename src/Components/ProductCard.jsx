import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="block h-full">
      <div className="flex flex-col h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover"
        />
        <div className="flex flex-col flex-grow p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            {product.name}
          </h2>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {product.description ||
              "Beautifully handcrafted from coconut shell."}
          </p>
          <p className="text-green-700 font-bold text-base mt-auto">
            ₹{product.price}
          </p>
          <button className="mt-3 w-full py-2 px-4 bg-lime-600 text-white text-sm font-medium rounded-lg hover:bg-lime-700 transition">
            More Details....
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
