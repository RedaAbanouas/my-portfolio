import React, { useRef, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";

export default function StatusCard({ status, isOpen, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose?.(); // trigger close from parent
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className="inset-0 justify-center items-center fixed z-50 flex flex-col px-8">
      <div
        ref={ref}
        className="w-full justify-center items-center p-8 md:p-16 max-w-[600px] flex flex-col gap-10 shadow-lg rounded-xl bg-card-dark border-2 border-slate-700"
      >
        {status === "success" && (
          <>
            <FaCheckCircle
              size={80}
              className="text-[var(--highlight-color)] mb-8 mt-8"
            />
            <h2 className="text-[var(--highlight-color)] text-md md:text-lg font-mono text-center">
              Your message has been sent successfully!
            </h2>
          </>
        )}

        {status === "error" && (
          <>
            <MdOutlineError
              size={80}
              className="text-[var(--highlight-color)] mb-8 mt-8"
            />
            <h2 className="text-[var(--highlight-color)] text-md md:text-lg font-mono text-center">
              Something went wrong. Please try again.
            </h2>
          </>
        )}
      </div>
    </div>
  );
}
