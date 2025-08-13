import React from "react";
import clsx from "clsx";

type ButtonVariant = "solid" | "outline";
type ButtonColor = "gray" | "beige" | "navy";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
}

const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  color = "gray",
  className,
  children,
  ...props
}) => {
  const base = "px-4 py-2 rounded font-medium transition-colors duration-200";

  const variants = {
    solid: {
      gray: "bg-gray-700 text-white hover:opacity-90",
      beige: "bg-amber-100 text-teal-900 hover:opacity-90",
      navy: "bg-teal-900 text-white hover:opacity-90",
    },
    outline: {
      gray: "border border-gray-700 text-teal-100 hover:bg-teal-100 hover:text-teal-900",
      beige: "border border-amber-100 text-amber-100 hover:bg-amber-100 hover:text-teal-900",
      navy: "border border-teal-900 text-teal-900 hover:bg-teal-900 hover:text-white",
    },
  };

  return (
    <button className={clsx(base, variants[variant][color], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
