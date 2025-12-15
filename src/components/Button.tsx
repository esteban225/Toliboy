import { Link } from "react-router-dom";
import { type ReactNode } from "react";

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  isExternal?: boolean;
  href?: string;
}

export default function Button({
  to,
  onClick,
  children,
  variant = "primary",
  className = "",
  isExternal = false,
  href,
}: ButtonProps) {
  const baseStyles =
    "relative font-bold rounded-4xl transition-transform active:shadow-none active:translate-x-0 active:translate-y-0";

  const variantStyles = {
    primary:
      "bg-red-600 text-white py-2 px-5 hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0_0_#1e40af]",
    secondary:
      "bg-white text-red-600 py-2 px-5 hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0_0_#e80029]",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // Botón externo (href)
  if (isExternal && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  // Botón interno (Link)
  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  // Botón con onClick
  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
