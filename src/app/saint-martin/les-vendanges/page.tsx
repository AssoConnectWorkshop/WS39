import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Les Vendanges",
  description: "Les vendanges au Château de Saint-Martin — de nuit, à la machine, en parcellaire pour une qualité optimale.",
};

const methodes = [
  {
    titre: "De nuit",
    icon: "🌙",
    detail:
      "Pour conserver la fraîcheur des raisins. Dans la journée les températures sont élevées ; il faut attendre 3h du matin pour avoir des conditions optimales et permettre la conservation du potentiel aromatique des raisins.",
  },
  {
    titre: "À la machine",
    icon: "⚙️",
    detail:
      "Pour limiter l'oxydation des raisins, sauf pour de très jeunes vignes ou des vignes très anciennes. Cela permet de choisir l'heure de la récolte en fonction des millésimes.",
  },
  {
    titre: "En parcellaire",
    icon: "🗺️",
    detail:
      "Pour obtenir les meilleures sélections. Chaque champ est vendangé au moment optimum de sa maturité — parfois même une partie des parcelles à l'ombre est ramassée après, permettant un suivi précis de chaque terroir.",
  },
];

export default function LesVendangesPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-end pb-16 pt-32"
        style={{
          background: "linear-gradient(to bottom, #1a0f0a 0%, #2a1a0a 100%)",
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
            Les vendanges
          </h1>
          <div className="section-divider" />
        </div>
      </section>

      {/* Méthodes */}
      <section className="py-16 bg-[#faf8f4]">
        <div className="max-w-5xl mx-auto px-6">
          <p
            className="text-center text-[#5c4a3a] text-lg mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Nos choix techniques aux vendanges sont guidés par une seule ambition : préserver le potentiel qualitatif de chaque raisin.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {methodes.map((m) => (
              <div key={m.titre} className="bg-white p-8 border border-[#e8d5a3] text-center">
                <div className="text-5xl mb-4">{m.icon}</div>
                <h2
                  className="text-2xl text-[#1a0f0a] mb-4"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
                >
                  {m.titre}
                </h2>
                <p
                  className="text-[#5c4a3a] leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem" }}
                >
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lien cave */}
      <section className="py-16 bg-[#2c1810] text-center">
        <p
          className="text-white/70 text-lg mb-6 max-w-2xl mx-auto px-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Après les vendanges, place à la vinification dans notre cave gravitaire ultra-moderne.
        </p>
        <a
          href="/saint-martin/la-cave"
          className="inline-block border border-[#c8a96e] text-[#c8a96e] px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#c8a96e] hover:text-white transition-colors"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Découvrir la cave
        </a>
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
