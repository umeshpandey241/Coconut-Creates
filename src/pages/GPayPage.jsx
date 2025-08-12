import React, { useState } from "react";
import { FaGooglePay } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { useCart } from "../context/useCart";

const GPayPage = () => {
  const [copied, setCopied] = useState(false);
  const [showPolicies, setShowPolicies] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("gpay"); // NEW
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    screenshot: null,
  });
  const { cartItems, totalAmount } = useCart();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const upiId = "sejalk801@oksbi";

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "screenshot") {
      setForm({ ...form, screenshot: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.address) {
      alert("Please fill all required fields.");
      return;
    }

    if (paymentMethod === "gpay" && !form.screenshot) {
      alert("Please upload payment screenshot.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("address", form.address);
    formData.append("paymentMethod", paymentMethod);
    if (form.screenshot) {
      formData.append("screenshot", form.screenshot);
    }
    formData.append("cart", JSON.stringify(cartItems));
    formData.append("totalAmount", totalAmount);

    try {
      const res = await fetch("/api/confirm-payment", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Order placed successfully. Check your email!");
        setForm({
          name: "",
          email: "",
          phone: "",
          address: "",
          screenshot: null,
        });
      } else {
        setMessage("Failed: " + data.error);
      }
    } catch (error) {
      setMessage("Error sending request.", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 md:p-10 w-full max-w-2xl border border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          Before You Pay
        </h2>

        {/* Policies & Agreement */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
          <button
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
            onClick={() => setShowPolicies(true)}
          >
            View Policies
          </button>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="agree" className="text-sm text-gray-700">
              I agree to the policies
            </label>
          </div>
        </div>

        {showPolicies && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-auto backdrop-blur-md">
            <div className="bg-white/80 backdrop-blur-md rounded-xl max-w-lg w-full p-6 shadow-xl overflow-y-auto max-h-[90vh]">
              <h3 className="text-xl font-semibold mb-4">Policies</h3>
              <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2 text-left">
                <li>
                  No replacement or exchange; refund is only applicable if the
                  product is damaged.
                </li>
                <li>
                  Every delivery may take some time as the work is completely
                  handmade. (Pictures of the damaged product should be taken as
                  proof.)
                </li>
                <li>
                  Once the order is placed, it cannot be cancelled as the
                  products are made exclusively to order.
                </li>
                <li>
                  Since the products are made from coconut shell, there is no
                  guarantee of complete replication; size and shape may vary,
                  which does not indicate any defect.
                </li>
                <li>
                  As the products are delicate and made from shell, we do not
                  hold liability for any mishandling by the customer after
                  delivery.
                </li>
                <li>
                  As the products are exclusive, restocking may take longer.
                </li>
                <li>
                  We do not negotiate or bargain on pricing unless part of an
                  offer or discount.
                </li>
              </ol>
              <div className="text-right mt-6">
                <button
                  onClick={() => setShowPolicies(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Payment Method Selection */}
        {agreed && (
          <>
            <div className="flex justify-center gap-4 mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="gpay"
                  checked={paymentMethod === "gpay"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Google Pay
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Cash on Delivery
              </label>
            </div>

            {/* Google Pay Section */}
            {paymentMethod === "gpay" && (
              <div className="text-center mb-6">
                <FaGooglePay className="text-blue-600 text-4xl mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Pay via Google Pay
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Use the UPI ID below to pay
                </p>

                <div className="flex items-center justify-center gap-2 bg-gray-100 border border-gray-300 rounded-md px-4 py-2">
                  <span className="text-sm text-gray-800">{upiId}</span>
                  <button
                    onClick={handleCopy}
                    className="text-blue-600 hover:text-blue-800 transition"
                  >
                    <FiCopy />
                  </button>
                  {copied && (
                    <span className="text-green-600 text-sm">Copied!</span>
                  )}
                </div>
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5 text-left text-base w-full"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                Confirm Your Order
              </h2>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500"
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500"
                required
              />

              <textarea
                name="address"
                placeholder="Your Shipping Address"
                value={form.address}
                onChange={handleChange}
                rows="3"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500 resize-none"
                required
              />

              {/* Screenshot only for GPay */}
              {paymentMethod === "gpay" && (
                <>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="screenshot"
                      className="text-sm font-medium text-gray-700"
                    >
                      Payment Screenshot <span className="text-red-500">*</span>
                    </label>

                    <div className="relative w-full">
                      <label
                        htmlFor="screenshot"
                        className="flex items-center justify-between px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:border-green-500 transition"
                      >
                        <span className="truncate text-sm text-gray-600">
                          {form.screenshot?.name || "No file selected"}
                        </span>
                        <span className="text-sm text-green-600 font-medium">
                          Browse
                        </span>
                      </label>

                      <input
                        type="file"
                        id="screenshot"
                        name="screenshot"
                        accept="image/*"
                        onChange={handleChange}
                        className="hidden"
                        required
                      />
                    </div>

                    <p className="text-xs text-gray-500">
                      Accepted formats: JPG, PNG • Max size: 2MB
                    </p>
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition"
              >
                {loading ? "Processing..." : "Place Order"}
              </button>

              {message && (
                <p className="text-center text-sm text-blue-700 mt-2">
                  {message}
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default GPayPage;
