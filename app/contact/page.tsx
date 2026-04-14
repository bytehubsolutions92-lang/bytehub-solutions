"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
  e.preventDefault();

  await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(form),
  });

  alert("Message sent successfully!");
};

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Contact Us
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded"
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 border rounded"
          rows={5}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full py-3 text-white rounded"
          style={{ background: "var(--accent)" }}
        >
          Send Message
        </button>

      </form>
    </div>
  );
}