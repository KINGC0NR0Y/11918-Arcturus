export function SpecGrid({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className="grid grid-cols-1 overflow-hidden rounded-sm *:border *:border-white/10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className=" p-5">
          <dt className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-ink-300">
            {item.label}
          </dt>
          <dd
            className={
              item.value === "TBD"
                ? "mt-1.5 font-display text-lg font-bold text-orange-400"
                : "mt-1.5 font-display text-lg font-bold text-white"
            }
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
