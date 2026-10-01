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
    <article className="group relative flex flex-col overflow-hidden rounded-sm border border-white/15 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/60 hover:shadow-xl hover:shadow-ink-900/5">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-900">
        <div className="bg-grid-dark-fine absolute inset-0 opacity-50" aria-hidden="true" />
        {member.isLead && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-orange-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-ink-950">
            Lead
          </span>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-4xl font-bold text-white/90 transition-transform duration-300 group-hover:scale-110">
            {initials(member.name)}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-base font-bold text-white">{member.name}</h3>
          <p className="mt-0.5 text-sm font-medium text-orange-400">{member.role}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {member.subteams.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
