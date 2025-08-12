import React from "react";
import { usePolicy } from "../context/PolicyContext";

const PolicyModal = () => {
  const { isOpen, agree, closePolicy } = usePolicy();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-md shadow-xl">
        <h2 className="text-xl font-semibold mb-4">Our Policies</h2>
        <p className="text-sm text-gray-700 mb-4">
          By clicking Agree, you accept our{" "}
          <a href="/terms" className="underline text-blue-600">
            Terms
          </a>{" "}
          and{" "}
          <a href="/privacy-policy" className="underline text-blue-600">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={closePolicy}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={agree}
            className="px-4 py-2 bg-lime-600 text-white rounded hover:bg-lime-700"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
