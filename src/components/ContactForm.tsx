"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    // For now, just simulate send
    setTimeout(() => setStatus("Message sent!"), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto text-left">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full border rounded-lg px-4 py-2"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full border rounded-lg px-4 py-2"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full border rounded-lg px-4 py-2"
        rows={4}
        required
      />
      <button
        type="submit"
        className="bg-[#0088d0] hover:bg-[#0073b0] text-white font-semibold py-2 px-6 rounded-lg"
      >
        Send
      </button>
      {status && <p className="text-sm text-gray-600">{status}</p>}
    </form>
  );
}