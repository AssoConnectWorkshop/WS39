"use client";

import { useState } from "react";

const teams = [
  {
    ws: "WS1",
    project: "Membership cards",
    members: ["Lucas M.", "Hanna", "Romain", "Simon"],
  },
  {
    ws: "WS2",
    project: "Voting app",
    members: ["Mateus", "Edouard", "Eric", "Mathieu B."],
  },
  {
    ws: "WS3",
    project: "Dashboard",
    members: ["Victor", "Johanna", "Guillaume", "Etienne"],
  },
  {
    ws: "WS4",
    project: "Activity report",
    members: ["Marion", "Julien W.", "Cyriane", "Thomas"],
  },
  {
    ws: "WS5",
    project: "Event planner",
    members: ["Marine", "Matt Matt", "Augustin", "Charles L."],
  },
  {
    ws: "WS6",
    project: "Sacem simulator",
    members: ["Justine", "Delphine", "Mathieu H.", "Aurélien"],
  },
  {
    ws: "WS7",
    project: "WhatsApp assistant",
    members: ["Bertrand", "Karl", "Flo G.", "Lucas P."],
  },
  {
    ws: "WS8",
    project: "Booking",
    members: ["Armand", "Aimée", "Alice", "Tristan"],
  },
  {
    ws: "WS9",
    project: "Subsidies generator",
    members: ["Sylvain", "Antoine", "Charles A.", "Axel"],
  },
];

function findTeam(name: string) {
  const q = name.trim().toLowerCase();
  if (!q) return null;
  return teams.find((t) =>
    t.members.some((m) => m.toLowerCase().includes(q))
  ) ?? null;
}

export default function TeamPage() {
  const [name, setName] = useState("");
  const team = findTeam(name);
  const noMatch = name.trim().length > 1 && !team;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-8 bg-white">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight">⚗️ AI Workshop</h1>
        <p className="text-gray-500">Type your name to find your team</p>
      </div>

      <input
        type="text"
        placeholder="Your name…"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full max-w-sm text-lg px-5 py-3 border-2 border-gray-200 rounded-2xl outline-none focus:border-black transition-colors"
        autoFocus
      />

      {team && (
        <div className="w-full max-w-sm border-2 border-black rounded-2xl p-6 flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              {team.ws}
            </span>
            <h2 className="text-2xl font-bold mt-1">{team.project}</h2>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
              Your teammates
            </p>
            <ul className="flex flex-col gap-1">
              {team.members.map((m) => {
                const isYou = m.toLowerCase().includes(name.trim().toLowerCase());
                return (
                  <li
                    key={m}
                    className={`flex items-center gap-2 text-base ${isYou ? "font-semibold" : "text-gray-600"}`}
                  >
                    {isYou ? (
                      <span className="w-2 h-2 rounded-full bg-black inline-block" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
                    )}
                    {m}
                    {isYou && (
                      <span className="text-xs text-gray-400 font-normal">(you)</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {noMatch && (
        <p className="text-gray-400 text-sm">No team found for &ldquo;{name}&rdquo;</p>
      )}
    </main>
  );
}
