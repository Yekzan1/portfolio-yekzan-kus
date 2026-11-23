import React from "react";

type Ton = "or" | "fantome" | "fantome-clair";

interface BoutonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  ton?: Ton;
  download?: boolean | string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  ariaLabel?: string;
}

function FlecheDisque() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function Bouton({
  href,
  onClick,
  children,
  ton = "or",
  download,
  target,
  rel,
  type = "button",
  className = "",
  ariaLabel,
}: BoutonProps) {
  const tonClass =
    ton === "or"
      ? "btn--or"
      : ton === "fantome"
      ? "btn--fantome"
      : "btn--fantome-clair";

  const content = (
    <>
      <span>{children}</span>
      <span className="btn__disque" aria-hidden="true">
        <FlecheDisque />
      </span>
    </>
  );

  if (href) {
    const isExternal = target === "_blank" || href.startsWith("http");
    return (
      <a
        href={href}
        download={download}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
        className={`btn ${tonClass} ${className}`}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${tonClass} ${className}`}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
