import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    title: "Coconut Planter",
    image: "/images/Giragge planter.jpeg",
  },
  {
    title: "Coconut Keychain",
    image: "/images/coconut-keychain.jpeg",
  },
  {
    title: "Coconut Chime",
    image: "/images/wind chime.jpeg",
  },
  {
    title: "Coconut Candle",
    image: "/images/candle.webp",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-gradient-to-br  to-green-40 py-12 text-center px-4 from-white">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
            Made by Hands,
            <br />
            Meant for Aesthetics.
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Coconut - turning coconut shells into handmade decorative items.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full"
            onClick={() => navigate("/products")}
          >
            SHOP NOW
          </button>
        </div>

        <div className="mt-10">🥥</div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold">
            Coconut creates curates for you
          </h2>
          <p className="text-gray-500 mb-10">
            Newly designed accessories consistently...
          </p>
        </div>

        <div className="p-6 bg-white">
          {/* Header Line */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-gray-800 mb-8 text-sm px-4">
            {[
              "✨ Hand Made",
              "🎨 Hand Painted",
              "🥥 Coconut Shell",
              "🛋️ Room Decor",
            ].map((tag, index) => (
              <span
                key={index}
                className=" text-lime-800 px-3 py-1 rounded-full shadow-sm hover:shadow-md transition text-xs sm:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-3xl p-4 shadow-md relative transition-transform hover:scale-105"
                onClick={() => navigate("/products")}
              >
                {/* Title */}
                <div className="text-xl font-serif mb-2">{product.title}</div>

                {/* Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-xl"
                />

                {/* Top Right Arrow */}
                <div className="absolute top-4 right-4 bg-black text-white p-2 rounded-full">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-4 pl-15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our mission at Coconut Oasis is to source and deliver the highest
              quality coconut water while promoting sustainability and
              supporting local communities. We are dedicated to preserving the
              integrity of this natural elixir, from the pristine coconut groves
              to your hands. Through transparent sourcing practices and a
              commitment to excellence, we strive to provide you with a taste of
              tropical paradise in every sip. Join us on our journey towards a
              healthier, more sustainable future, one coconut at a time.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Coconut Oasis, our vision is to inspire a healthier and more
              hydrated world by delivering the purest and most refreshing
              coconut water to our customers. We envision a future where
              everyone can enjoy the revitalizing benefits of nature’s perfect
              elixir, straight from the source to your glass.
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold inline-flex items-center group"
            >
              READ MORE
              <svg
                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right Circular Image */}
          <div className="flex justify-center">
            <div className="rounded-full border-8 border-green-300 overflow-hidden w-72 h-72">
              <img
                src="/images/coconut-shell 2.webp"
                alt="Our Story Coconuts"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-50 py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/images/coconut-shell.webp"
              alt="Coconut Accessories"
              className="w-full max-w-sm"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-green-900 mb-6">
              Benefits of Accessories Made from Coconut Shells
            </h2>

            <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <li>
                <strong>Eco-Friendly Innovation:</strong> Coconut shell-based
                products reduce agricultural waste and minimize our carbon
                footprint by replacing plastic and non-biodegradable materials.
              </li>
              <li>
                <strong>Durable & Unique:</strong> Each item is naturally sturdy
                with a distinct texture, making every accessory one-of-a-kind
                and long-lasting.
              </li>
              <li>
                <strong>Supports Local Artisans:</strong> Most accessories are
                handmade, providing employment and preserving traditional crafts
                in coconut-growing communities.
              </li>
              <li>
                <strong>Biodegradable & Sustainable:</strong> Unlike plastic,
                coconut shell waste items break down naturally and are part of a
                circular, zero-waste production model.
              </li>
              <li>
                <strong>Stylish with a Story:</strong> Coconut accessories carry
                a natural, earthy aesthetic while showcasing your commitment to
                sustainability and ethical living.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
