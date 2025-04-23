"use client";

import { ReactNode } from "react";

type SmoothScrollLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
};

export default function SmoothScrollLink({
  to,
  children,
  className,
}: SmoothScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = to.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    window.history.pushState(null, "", to); 
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
