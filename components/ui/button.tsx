import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none rounded-full select-none cursor-pointer";

  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200 active:scale-95",
    secondary: "bg-gymshark-surface text-white hover:bg-neutral-800 active:scale-95",
    outline: "border border-white/30 text-white hover:bg-white/10 active:scale-95",
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-xs px-6 py-3",
    lg: "text-sm px-8 py-4",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
