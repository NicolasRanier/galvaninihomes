/** Mapa ilustrativo (vetorial) — apenas decorativo. */
export function MapIllustration() {
  return (
    <svg viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-label="Mapa ilustrativo da localização">
      <rect width="400" height="150" className="fill-map-land" />
      <rect x="20" y="15" width="70" height="40" rx="4" className="fill-map-park" />
      <rect x="250" y="95" width="60" height="45" rx="4" className="fill-map-park" />
      <path d="M330 0 C 345 40, 360 60, 352 95 S 370 140, 380 150" className="stroke-map-water" strokeWidth="9" fill="none" strokeLinecap="round" />
      <g className="stroke-map-road" fill="none" strokeLinecap="round">
        <path d="M0 62 C 80 55, 160 70, 400 50" strokeWidth="5" />
        <path d="M0 115 L 400 108" strokeWidth="3" />
        <path d="M120 0 L 150 150" strokeWidth="3" />
        <path d="M230 0 C 220 50, 210 90, 225 150" strokeWidth="3" />
        <path d="M60 0 L 40 150" strokeWidth="2" />
        <path d="M300 0 L 290 150" strokeWidth="2" />
      </g>
      <path d="M150 150 L 175 60 L 200 0" className="stroke-map-highway" strokeWidth="3" fill="none" />
      <text x="18" y="90" className="fill-map-label" fontSize="8" letterSpacing="1">JARDIM</text>
      <text x="300" y="80" className="fill-map-label" fontSize="8">Mercado</text>
      <text x="245" y="130" className="fill-map-label" fontSize="7">Parque</text>
      <g transform="translate(176 62)">
        <circle r="16" className="fill-primary" opacity="0.12" />
        <path d="M0 -2 C -6 -10, -9 -14, -9 -18 a 9 9 0 0 1 18 0 c 0 4 -3 8 -9 16Z" className="fill-primary" transform="translate(0 4)" />
        <circle cy="-14" r="3.2" className="fill-primary-foreground" />
        <text x="14" y="-6" className="fill-ink" fontSize="10" fontWeight="500">Localização</text>
      </g>
    </svg>
  );
}
