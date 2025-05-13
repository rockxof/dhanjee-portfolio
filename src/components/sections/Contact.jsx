import React, { useRef, useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const env = import.meta.env;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const ref = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      env.VITE_SERVICE_ID,
      env.VITE_TEMPLATE_ID,
        ref.current,
      env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <RevealOnScroll>
        <div className=" px-4 w-100 md:w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <form ref={ref} onSubmit={sendEmail} className="space-y-6">
            <div className="relative">
              <input
                onChange={(e) =>
                  setFormData({ ...setFormData, name: e.target.value })
                }
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name..."
                value={formData.name}
                className="bg-white/5 w-full border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 "
              />
            </div>

            <div className="relative">
              <input
                onChange={(e) =>
                  setFormData({ ...setFormData, email: e.target.value })
                }
                type="email"
                id="email"
                name="email"
                value={formData.email}
                required
                placeholder="example@email.com"
                className="bg-white/5 w-full border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            <div className="relative">
              <textarea
                onChange={(e) =>
                  setFormData({ ...setFormData, message: e.target.value })
                }
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                placeholder="enter you message..."
                className="bg-white/5 w-full border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 w-full text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
