"use client";
import React, { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import Header from "../header/Header";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_9ekdp6p",
        "template_2qblctl",
        e.currentTarget, // الفورم نفسه
        "DeUS2HuXxeNtJsWcG",
      )
      .then((result) => {
        console.log("SUCCESS", result);
        alert("Message sent! ✅");
        setForm({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Something went wrong ❌");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="Contact"
      className="w-full bg-[#1f1f28] text-gray-200 py-5 px-5 flex flex-col items-center relative content-merge2"
    >
      <Header
        name="Contact"
        icon={Mail}
        color="white"
        backgroundColor="#060606"
      />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl backdrop-blur-lg mt-5 bg-white/10 border border-gray-700 rounded-3xl p-8 flex flex-col gap-5 shadow-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-4 rounded-xl bg-white/20 border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none text-white transition duration-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-4 rounded-xl bg-white/20 border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none text-white transition duration-300"
            required
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="p-4 rounded-xl bg-white/20 border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none text-white transition duration-300"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="p-4 rounded-xl bg-white/20 border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none text-white transition duration-300 resize-none"
          required
        />

        <button
          disabled={loading}
          type="submit"
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="flex gap-8 mt-12">
        <a
          href="mailto:ahmedali1342001@gmail.com"
          target="_blank"
          className="hover:text-indigo-400 transition-colors duration-300"
        >
          <Mail size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-ali-254813240/"
          target="_blank"
          className="hover:text-indigo-400 transition-colors duration-300"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://github.com/ahmedalix134"
          target="_blank"
          className="hover:text-indigo-400 transition-colors duration-300"
        >
          <Github size={28} />
        </a>
      </div>
    </section>
  );
}
