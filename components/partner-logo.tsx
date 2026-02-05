"use client";

import { useState } from "react";

interface PartnerLogoProps {
  name: string;
  logo: string;
}

export function PartnerLogo({ name, logo }: PartnerLogoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span className="text-sm font-bold text-amavi-brown text-center px-2">
        {name}
      </span>
    );
  }

  return (
    <img
      src={logo}
      alt={name}
      className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
      onError={() => setHasError(true)}
    />
  );
}
