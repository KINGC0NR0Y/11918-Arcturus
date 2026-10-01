"use client";

import { TeamCard } from "@/components/team/TeamCard";
import { subteamFilters, teamMembers } from "@/lib/data/team";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

export function TeamDirectory() {
  const [filter, setFilter] = useState<(typeof subteamFilters)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return teamMembers.filter((member) => {
      const matchesFilter =
        filter === "All" ||
        (filter === "Leadership" ? member.isLead : member.subteams.includes(filter));
      const matchesQuery = member.name.toLowerCase().includes(query.trim().toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          role="group"
          aria-label="Filter team by subteam"
          className="-mx-1 flex flex-wrap gap-2 overflow-x-auto px-1 pb-1"
        >
          {subteamFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                filter === f
                  ? "bg-orange-500 text-ink-950"
                  : "bg-white/10 text-ink-200 hover:bg-white/20"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <label className="relative w-full sm:w-64">
          <span className="sr-only">Search team members by name</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name&hellip;"
            className="w-full rounded-sm border border-white/20 px-4 py-2.5 text-sm text-white placeholder:text-ink-300 focus:border-orange-400"
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-sm text-ink-300">
          No team members match that filter.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </div>
  );
}
