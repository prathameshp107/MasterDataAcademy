"use client";

interface GoogleMapEmbedProps {
  className?: string;
}

export function GoogleMapEmbed({ className = "" }: GoogleMapEmbedProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <iframe
        src="https://www.google.com/maps?q=S2TAB+SOFTWARE+PRIVATE+LIMITED,+VTP+Trade+Park,+Undri,+Pune&z=15&output=embed"
        className="w-full h-full border-0 block"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}