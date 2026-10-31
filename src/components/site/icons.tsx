import type { SVGProps } from "react";

export function AirbnbIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 17.5c-1.6-2-3-4.2-3-5.8a3 3 0 0 1 6 0c0 1.6-1.4 3.8-3 5.8Z" />
      <path d="M12 17.5c2.3 2.6 5 3.6 6.6 2.4 1.7-1.3 1.3-3.4.3-5.6L14 4.6a2.2 2.2 0 0 0-4 0L5.1 14.3c-1 2.2-1.4 4.3.3 5.6 1.6 1.2 4.3.2 6.6-2.4Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M3.5 20.5l1.3-4.1A8.5 8.5 0 1 1 8 19.4l-4.5 1.1Z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a5 5 0 0 1-2.8-2.8l.8-1-1-2L9 8.5Z" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span className="font-display text-2xl tracking-[0.06em] text-ink">GALVININI</span>
      <span className="mt-1 text-[0.6rem] font-medium tracking-[0.55em] text-taupe">HOMES</span>
    </span>
  );
}
