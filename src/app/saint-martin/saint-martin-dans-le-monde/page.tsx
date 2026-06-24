import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Saint-Martin dans le monde",
  description: "Le Château de Saint-Martin primé et reconnu par les plus grands concours et tables du monde.",
};

const distinctions = [
  "Concours Général Agricole",
  "Gault & Millau",
  "Guide Hachette des Vins",
  "Robert Parker Wine Advocate",
  "Mondial du Rosé",
  "Decanter",
  "Wine Enthusiast",
];

const grandesTables = [
  { nom: "Palais de l'Élysée", lieu: "Paris", note: "Référence depuis 2007" },
  { nom: "Majestic", lieu: "Cannes", note: "" },
  { nom: "Georges Blanc ***", lieu: "Vonnas", note: "" },
  { nom: "Le Relais des Moines *", lieu: "Les Arcs sur Argens", note: "" },
  { nom: "Les Vieux Murs", lieu: "Antibes", note: "" },
  { nom: "Brasserie Méditerranée", lieu: "Mougins", note: "" },
  { nom: "La Mirande", lieu: "Avignon", note: "" },
  { nom: "Le Castellaras", lieu: "Provence", note: "" },
  { nom: "Restaurant La Truffe", lieu: "Aups", note: "" },
];

const anecdotesMonde = [
  {
    titre: "Le Palais de l'Élysée",
    detail:
      "La Cuvée Grande Réserve rosé, rouge et blanc du Château de Saint-Martin est sélectionnée par le Palais de l'Élysée depuis 2007.",
  },
  {
    titre: "Une soirée de gala en Estonie",
    detail:
      "Les vins de Saint-Martin mis à l'honneur dans un dîner de gala organisé par l'importatrice estonienne Maria, avec une cuisine française. Cuvées présentes : Comtesse Blanc, Bulles de Rosé, Grande Réserve, Comtesse Rosé.",
  },
  {
    titre: "À Shanghai",
    detail:
      "La cuvée « Comte de Rohan Chabot » arrive 4ème dans la dégustation des 30 meilleurs vins rouges du monde au Consulat de France.",
  },
];

export default function SaintMartinDansLeMondesPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-end pb-16 pt-32"
        style={{
          background: "linear-gradient(to bottom right, #0a0f1a 0%, #1a0f0a 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center w-full">
          <p
            className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {siteConfig.shortName}
          </p>
          <h1
            className="text-5xl md:text-6xl text-white mb-6"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Saint-Martin dans le monde
          </h1>
          <div className="section-divider" />
        </div>
      </section>

      {/* Distinctions */}
      <section className="py-16 bg-[#faf8f4]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-3xl text-[#1a0f0a] mb-4"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
          >
            Les distinctions du Château
          </h2>
          <div className="section-divider mb-8" />
          <p
            className="text-[#5c4a3a] mb-8 leading-relaxed"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem" }}
          >
            Le Château de Saint-Martin est primé et reconnu par de nombreux concours et guides prestigieux.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {distinctions.map((d) => (
              <span
                key={d}
                className="px-4 py-2 border border-[#c8a96e] text-[#8c7b6b] text-xs tracking-widest uppercase"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Grandes tables */}
      <section className="py-16 bg-[#2c1810]">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-3xl text-center text-white mb-4"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Ils nous font confiance
          </h2>
          <p
            className="text-center text-white/60 text-sm tracking-widest uppercase mb-10"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Grandes tables en France et dans le monde
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {grandesTables.map((t) => (
              <div key={t.nom} className="border border-white/20 p-5">
                <p
                  className="text-white font-medium mb-1"
                  style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem" }}
                >
                  {t.nom}
                </p>
                <p
                  className="text-[#c8a96e] text-xs tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {t.lieu}
                </p>
                {t.note && (
                  <p
                    className="text-white/50 text-xs mt-1"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {t.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anecdotes monde */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          {anecdotesMonde.map((a) => (
            <div key={a.titre} className="border-l-2 border-[#c8a96e] pl-8">
              <h3
                className="text-2xl text-[#1a0f0a] mb-3"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
              >
                {a.titre}
              </h3>
              <p
                className="text-[#5c4a3a] leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem" }}
              >
                {a.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Back */}
      <section className="py-12 bg-[#faf8f4] text-center">
        <a
          href="/saint-martin"
          className="inline-block border border-[#c8a96e] text-[#c8a96e] px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#c8a96e] hover:text-white transition-colors"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Retour au domaine
        </a>
      </section>

      <footer className="bg-[#1a0f0a] py-10 text-center">
        <p className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-sans)" }}>
          © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.contact.city}
        </p>
      </footer>
    </>
  );
}
