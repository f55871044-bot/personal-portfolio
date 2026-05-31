import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // sending / sent / error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_xr5rluf",   // ✅ tumhari Service ID
        "template_pxoemnu",  // ✅ tumhari Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "bMAuB0DIVSYRJeIK2"  // ✅ tumhari Public Key
      )
      .then(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 bg-black text-white overflow-hidden"
    >

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-cyan-500/20 blur-[100px] sm:blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-purple-500/20 blur-[100px] sm:blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6"
        >
          Let's Work Together
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-10 sm:mb-16 text-sm sm:text-base"
        >
          Have a project in mind? Send me a message 🚀
        </motion.p>

        {/* Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl"
        >

          {/* Name */}
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-cyan-400 transition"
          />

          {/* Email */}
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-purple-400 transition"
          />

          {/* Message */}
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            rows="5"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-cyan-400 transition"
          />

          {/* ✅ Success / Error Message */}
          {status === "sent" && (
            <p className="text-cyan-400 mb-4 font-medium">
              ✅ Message bhej diya! Main jald reply karungi.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 mb-4 font-medium">
              ❌ Kuch error hua, dobara try karo.
            </p>
          )}

          {/* Button */}
          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(34,211,238,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-white text-black font-bold w-full sm:w-auto disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>

        </motion.form>
      </div>
    </section>
  );
}