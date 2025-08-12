import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navbar";
import ProductDetailPage from "./pages/ProductDetailsPage";
import { CartProvider } from "./context/CartContext";
import CartSidebar from "./Components/CartSidebar";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";
import GPayPage from "./pages/GPayPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartToast from "./Components/CartToast";

function App() {
  return (
    <Router>
      <Toaster />
      <Navbar />
      <CartSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route
          path="*"
          element={<div className="p-4">404 Page Not Found</div>}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pay" element={<GPayPage />} />
      </Routes>
      <CartToast />
      <Footer />
    </Router>
  );
}

export default App;
