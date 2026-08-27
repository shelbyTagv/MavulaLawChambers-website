import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "gold" | "outline" | "ghost";
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = "gold",
  href,
  to,
  onClick,
  className = "",
  external = false,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const baseClasses = {
    gold: "btn-gold",
    outline: "btn-gold-outline",
    ghost: "text-gold hover:text-gold-light transition-colors duration-300 font-semibold",
  };

  const classes = `${baseClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
