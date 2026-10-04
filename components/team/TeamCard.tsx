import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import type { TeamMember } from "@/lib/types";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group panel corner-ticks panel-hover flex flex-col overflow-hidden">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-900">
        <div className="bg-grid-dark-fine absolute inset-0 opacity-50" aria-hidden="true" />
        {member.isLead && (
          <span className="absolute left-3 top-3 z-10 bg-orange-500 px-2 py-1 font-mono-tech text-[10px] font-medium uppercase tracking-[0.18em] text-ink-950 shadow-[2px_2px_0_0_rgb(0_0_0/0.5)]">
            Lead
          </span>
        )}
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            quality={90}
            className="object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-4xl font-bold text-white/90 transition-transform duration-300 group-hover:scale-110">
              {initials(member.name)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-base font-bold text-white">{member.name}</h3>
          <p className="mt-1 font-mono-tech text-[11px] uppercase tracking-[0.15em] text-orange-400">{member.role}</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {member.subteams.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
