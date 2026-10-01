import type { CompetitionEvent } from "@/lib/types";
import { TbdCard } from "@/components/ui/TbdCard";

export function CompetitionTable({ events }: { events: CompetitionEvent[] }) {
  if (events.length === 0) {
    return (
      <TbdCard
        title="No competitions logged yet"
        description="Results will be added here after every event ARCTURUS attends this season."
      />
    );
  }

  return (
    <div className="overflow-x-auto rounded-sm border border-white/15">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-white/5 text-xs uppercase tracking-wide text-ink-300">
            <th scope="col" className="px-5 py-3.5 font-semibold">
              Event
            </th>
            <th scope="col" className="px-5 py-3.5 font-semibold">
              Date
            </th>
            <th scope="col" className="px-5 py-3.5 font-semibold">
              Location
            </th>
            <th scope="col" className="px-5 py-3.5 font-semibold">
              Result
            </th>
            <th scope="col" className="px-5 py-3.5 font-semibold">
              Awards
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, i) => (
            <tr key={`${event.event}-${event.date}`} className={i % 2 ? "" : ""}>
              <td className="px-5 py-4 font-semibold text-white">{event.event}</td>
              <td className="px-5 py-4 text-ink-200">{event.date}</td>
              <td className="px-5 py-4 text-ink-200">{event.location}</td>
              <td className="px-5 py-4 text-ink-200">{event.result}</td>
              <td className="px-5 py-4 text-ink-200">{event.awards}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
