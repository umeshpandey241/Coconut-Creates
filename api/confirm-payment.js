import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const form = new formidable.IncomingForm({ keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Form parsing error." });

    const { name, email, phone, address, totalAmount, paymentMethod } = fields;
    const cart = JSON.parse(fields.cart || "[]");

    const screenshot = files.screenshot;
    const screenshotPath = screenshot?.filepath || screenshot?.path;

    // Validation
    if (!name || !email || !phone || !address || cart.length === 0) {
      return res
        .status(400)
        .json({ error: "Missing required fields or empty cart." });
    }

    // If GPay → screenshot required
    if (paymentMethod === "gpay" && !screenshot) {
      return res
        .status(400)
        .json({ error: "Payment screenshot required for Google Pay." });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const cartText = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} - Qty: ${item.quantity} - ₹${
            item.price * item.quantity
          }`
      )
      .join("\n");

    // === Email to Admin ===
    let adminMail = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject:
        paymentMethod === "cod"
          ? "📦 New COD Order Received"
          : "🧾 New Payment Received",
      text:
        paymentMethod === "cod"
          ? `📦 New COD Order Received:

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
🏠 Address:
${address}

🛒 Cart Items:
${cartText}

💰 Total Amount: ₹${totalAmount}

Payment Method: Cash on Delivery (Pending)`
          : `🧾 New Order Received:

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
🏠 Address:
${address}

🛒 Cart Items:
${cartText}

💰 Total Amount: ₹${totalAmount}

📸 Payment screenshot attached.`,
    };

    // Attach screenshot only for GPay
    if (paymentMethod === "gpay" && screenshot) {
      adminMail.attachments = [
        {
          filename: screenshot.originalFilename,
          content: fs.createReadStream(screenshotPath),
        },
      ];
    }

    await transporter.sendMail(adminMail);

    // === Email to User ===
    let userMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject:
        paymentMethod === "cod"
          ? "✅ Order Confirmation – Cash on Delivery"
          : "✅ Order Confirmation – Payment Received",
      html:
        paymentMethod === "cod"
          ? `
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thanks for your order! Your total is <strong>₹${totalAmount}</strong>, payable upon delivery.</p>
        <p>Here's a summary of your order:</p>
        <ul>
          ${cart
            .map(
              (item) =>
                `<li>${item.name} — Qty: ${item.quantity} — ₹${
                  item.price * item.quantity
                }</li>`
            )
            .join("")}
        </ul>
        <p><strong>Shipping Address:</strong><br/>${address.replace(
          /\n/g,
          "<br/>"
        )}</p>
        <p>We’ll ship your handmade product soon. Please have the payment ready at delivery.</p>
      `
          : `
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thanks for your order! We've received your payment of <strong>₹${totalAmount}</strong>.</p>
        <p>Here's a summary of your order:</p>
        <ul>
          ${cart
            .map(
              (item) =>
                `<li>${item.name} — Qty: ${item.quantity} — ₹${
                  item.price * item.quantity
                }</li>`
            )
            .join("")}
        </ul>
        <p><strong>Shipping Address:</strong><br/>${address.replace(
          /\n/g,
          "<br/>"
        )}</p>
        <p>We'll ship your handmade product soon. Thank you! 🙌</p>
      `,
    };

    await transporter.sendMail(userMail);

    return res.status(200).json({ success: true });
  });
}
