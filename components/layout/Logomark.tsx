export function Logomark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18.5" stroke="currentColor" strokeWidth="1.4" opacity="0.35" />
      <path
        d="M20 4.5c8.56 0 15.5 6.94 15.5 15.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M20 35.5C11.44 35.5 4.5 28.56 4.5 20"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M20 12l2.47 5.53L28 20l-5.53 2.47L20 28l-2.47-5.53L12 20l5.53-2.47L20 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
