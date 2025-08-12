import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/useCart";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.products.find((item) => item.id.toString() === id);
        setProduct(found);
      });
  }, [id]);

  if (!product)
    return (
      <div className="p-6 text-center text-gray-600">
        Loading product details...
      </div>
    );

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white p-6 md:p-10 rounded-xl shadow-md">
        {/* Left: Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-lg shadow"
          />
        </div>

        {/* Right: Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-green-700 text-2xl font-semibold mb-6">
            ₹{product.price}
          </p>

          {/* Extra Content */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Product Highlights:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>✨ 100% handcrafted from natural coconut shells</li>
              <li>🌿 Eco-friendly and sustainable material</li>
              <li>🖌️ Hand-painted with love and care</li>
              <li>🎁 Perfect for gifts or home decor</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Care Instructions:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>🧼 Wipe with a soft, damp cloth</li>
              <li>🚫 Avoid harsh chemicals or detergents</li>
              <li>🌞 Keep away from direct sunlight for long-lasting colors</li>
            </ul>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="mt-auto w-full md:w-1/2 py-3 px-4 bg-lime-600 text-white font-medium rounded-lg hover:bg-lime-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
