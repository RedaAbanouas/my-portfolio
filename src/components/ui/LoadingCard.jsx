import React from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { motion } from "framer-motion";

export default function LoadingCard() {
  return (
    <div
      className="inset-0 justify-center items-center fixed z-50 flex flex-col px-8"
      initial
    >
      <div className="w-full justify-center items-center z-100 p-8 md:p-16 max-w-[600px] flex flex-col gap-10 shadow-lg rounded-xl bg-card-dark border-2 border-slate-700">
        <AiOutlineLoading
          size={80}
          className="text-[var(--highlight-color)] animate-spin mb-8 mt-8"
        />
        <h2 className="text-[var(--highlight-color)] text-sm md:text-md lg:text-lg font-mono text-center">
          Sending your message...
        </h2>
      </div>
    </div>
  );
}
