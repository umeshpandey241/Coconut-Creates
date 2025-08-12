import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
          toast.success("Message sent!");
        },
        (error) => {
          console.error("Error:", error.text);
          toast.error("Failed to send message.");
          setStatus("Something went wrong. Try again.");
        }
      );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-6 bg-white p-6 shadow-lg rounded-xl"
      >
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full border rounded-lg p-2 resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-lime-600 text-white px-4 py-2 rounded-lg hover:bg-lime-700"
        >
          Send Message
        </button>

        {status && <p className="text-green-600 font-medium">{status}</p>}
      </form>

      {/* Map & Contact Info */}
      <div className="space-y-6 bg-white p-6 shadow-lg rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>

        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5872993172934!2d72.87765557517644!3d19.124268382104886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c870f52df20b%3A0x2f5ab94c27081465!2sPhoenix%20Marketcity!5e0!3m2!1sen!2sin!4v1690897841732!5m2!1sen!2sin"
          width="100%"
          height="250"
          className="rounded"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <div>
          <p className="font-medium text-gray-700">📧 Email:</p>
          <p className="text-gray-600">coconutcreates25@gmail.com</p>
        </div>

        <div>
          <p className="font-medium text-gray-700">📞 Contact Number:</p>
          <p className="text-gray-600"> +91 8928296882</p>
        </div>

        <div>
          <p className="font-medium text-gray-700">🏢 Address:</p>
          <p className="text-gray-600">
            Coconut Crafts Pvt Ltd,
            <br />
            Kurla, Mumbai, Maharashtra - 400070
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
