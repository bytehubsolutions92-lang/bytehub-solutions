"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setSuccess("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <main className="py-20 px-6">

      <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-md">
        
        <h1 className="text-3xl font-bold mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Have a project in mind? Let’s talk.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition"
            style={{ background: "var(--accent)" }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

        <div className="text-center mt-6 text-gray-600">
  <p>Or contact us directly:</p>
  <p className="font-semibold">info@bytehubsolutions.com</p>
</div>

        {/* SUCCESS MESSAGE */}
        {success && (
          <p className="text-center mt-6 text-green-600 font-medium">
            {success}
          </p>
        )}

      </div>

    </main>
  );
}