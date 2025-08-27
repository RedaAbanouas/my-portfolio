import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import Button from "./ui/Button";
import emailjs from "@emailjs/browser";
import BgBlur from "./ui/BgBlur";
import StatusCard from "./ui/StatusCard";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_sk80zql", "template_qzlry4m", form.current, {
        publicKey: "uGROrL3atOFqSKB4C",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setStatus("success");
          setLoading(false);
          form.current.reset();
        },
        () => {
          setStatus("error");
          setLoading(false);
        }
      );
  };
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center bg-dark py-24"
    >
      {/* Section Title */}
      <motion.h1
        className="text-gray-100 font-bold text-3xl sm:text-4xl font-mono mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[var(--highlight-color)]">5.</span>Contact Me
      </motion.h1>

      <div className="max-w-[1280px] w-full flex flex-col md:flex-row">
        {/*Left Content */}
        <div className="flex flex-col justify-center items-center w-full md:w-[40%] px-16 text-center md:text-left">
          <h2 className="text-gray-100 font-bold text-xl sm:text-2xl md:text-3xl font-grotesk mb-8 hover:text-[var(--highlight-color)] transition-colors duration-200">
            Get In Touch
          </h2>
          <p className="text-gray-300 mb-8 font-grotesk text-sm md:text-md lg:text-lg text-center">
            I'm always excited to collaborate on new projects, exchange ideas,
            and learn from others. Whether you have a question, a project idea,
            or just want to connect, feel free to reach out. I'd be happy to
            hear from you!
          </p>
          <div className="flex flex-col justify-center ">
            <span className="mx-auto text-center flex gap-4 text-gray-300 mb-6 font-grotesk text-sm md:text-md lg:text-lg items-center">
              <MdOutlineMailOutline
                size={28}
                className="text-[var(--highlight-color)]"
              />
              abanouasreda6@gmail.com
            </span>
            <span className="mx-auto text-center flex gap-4 text-gray-300 mb-6 font-grotesk text-sm md:text-md lg:text-lg items-center">
              <FaPhone size={28} className="text-[var(--highlight-color)]" />
              +2126 51 70 14 04
            </span>
            <span className="mx-auto text-center flex gap-4 text-gray-300 mb-6 font-grotesk text-sm md:text-md lg:text-lg items-center">
              <GiPositionMarker
                size={28}
                className="text-[var(--highlight-color)]"
              />
              Casablanca, Morocco
            </span>
          </div>
        </div>
        {/*Right Content */}
        <div className="w-full px-8 md:w-[60%] flex flex-col items-center">
          <h2 className="text-gray-100 font-bold text-xl sm:text-2xl md:text-3xl font-grotesk mb-8 hover:text-[var(--highlight-color)] transition-colors duration-200">
            Send a Message
          </h2>

          <form
            className="flex flex-col gap-6 w-full"
            ref={form}
            onSubmit={sendEmail}
          >
            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-card border border-slate-700 text-gray-100 focus:outline-none focus:border-[var(--highlight-color)] transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="from_email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-card border border-slate-700 text-gray-100 focus:outline-none focus:border-[var(--highlight-color)] transition"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                rows="8"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl bg-card border border-slate-700 text-gray-100 focus:outline-none focus:border-[var(--highlight-color)] transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" variant="primary">
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {/* Status messages */}
        {status && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <BgBlur />
            <StatusCard
              status={status}
              isOpen={!!status}
              onClose={() => setStatus(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
