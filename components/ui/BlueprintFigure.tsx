export function BlueprintFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 320" fill="none" className={className} aria-hidden="true">
      {/* Base chassis wireframe */}
      <path
        d="M70 230 L140 190 L300 190 L330 230 L260 260 L100 260 Z"
        stroke="#4f84f5"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
      <path
        d="M100 260 L100 210 L140 190 M260 260 L260 210 L300 190"
        stroke="#4f84f5"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
      {/* Arm / mechanism */}
      <path d="M180 190 L180 110 L250 80" stroke="#ff7a3d" strokeWidth="2" />
      <circle cx="180" cy="190" r="5" fill="#ff6417" />
      <circle cx="180" cy="110" r="5" fill="#ff6417" />
      <circle cx="250" cy="80" r="6" stroke="#ff6417" strokeWidth="2" fill="none" />
      {/* Wheels */}
      <circle cx="115" cy="255" r="14" stroke="#82aaff" strokeWidth="1.5" />
      <circle cx="245" cy="255" r="14" stroke="#82aaff" strokeWidth="1.5" />
      {/* Dimension lines */}
      <path d="M70 285 L330 285" stroke="#6b7280" strokeWidth="1" />
      <path d="M70 278 L70 292 M330 278 L330 292" stroke="#6b7280" strokeWidth="1" />
      <text x="188" y="303" fill="#9aa1ad" fontSize="10" fontFamily="ui-monospace, monospace">
        WIDTH — TBD
      </text>
      {/* Crosshair marks */}
      <path d="M200 40 L200 60 M190 50 L210 50" stroke="#4f84f5" strokeWidth="1" opacity="0.6" />
      <path d="M40 130 L60 130 M50 120 L50 140" stroke="#ff7a3d" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
