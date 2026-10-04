import { TeamCard } from "@/components/team/TeamCard";
import { teamMembers } from "@/lib/data/team";

export function TeamDirectory() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {teamMembers.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  );
}
