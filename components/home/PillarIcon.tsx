const paths: Record<string, string> = {
  cad: "M4 8l8-4 8 4-8 4-8-4Zm0 0v8l8 4m0-8v8m8-12v8l-8 4",
  software: "M8 9l-4 3 4 3m8-6l4 3-4 3M14 6l-4 12",
  hardware: "M6 6h5v5H6V6Zm7 7h5v5h-5v-5ZM8.5 11v2M11 8.5h2M15.5 15v-2M18 13.5h-2",
  strategy: "M4 18l6-6 4 4 6-8M4 18h16",
  business: "M4 20V10l8-6 8 6v10M9 20v-6h6v6",
};

export function PillarIcon({ name, className }: { name: string; className?: string }) {
  const d = paths[name] ?? paths.hardware;
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
