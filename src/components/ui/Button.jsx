export default function Button({ children, onClick, type = "button", variant = "primary", className = "" }) {
    const base = "rounded-lg font-bold font-mono transition-colors duration-200 cursor-pointer";
  
    const variants = {
      primary: "bg-[var(--highlight-color)] border border-[var(--highlight-color)] hover:bg-transparent hover:text-[var(--highlight-color)]",
      secondary: "bg-secondary-color text-gray-100 hover:bg-secondary-color/80",
      outline: "bg-gray-900 border border-gray-600 text-gray-300 hover:text-black hover:border-[var(--yellow-highlight)] hover:bg-[var(--yellow-highlight)] ",
    };
  
    const sizes = {
      sm: "px-5 py-3 text-sm",
      md: "md:px-6 md:py-3 md:text-sm",
      lg: "lg:px-6 lg:py-3 lg:text-lg",
    };
  
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${base} ${variants[variant]} ${sizes.sm} ${sizes.lg} ${className}`}
      >
        {children}
      </button>
    );
  }
  