import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "La Cave",
  description: "La cave du Château de Saint-Martin — cave de vinification ultra-moderne et cave d'élevage historique des XIIe et XVIe siècles.",
};

const atouts = [
  {
    titre: "Cave gravitaire",
    detail:
      "Nous évitons l'usage intensif de pompes qui bousculent les vins et les abîment. Le travail en gravitaire permet un traitement plus doux et plus respectueux des vins.",
  },
  {
    titre: "Thermorégulation précise",
    detail:
      "Travail de plus en plus précis sur les vins grâce à la thermorégulation, permettant d'affiner les profils aromatiques et de préserver les qualités naturelles de chaque cuvée.",
  },
  {
    titre: "Micro-cuvées & assemblages",
    detail:
      "Travail en micro-cuvées avec assemblages ultérieurs. Taux de sulfites 2 fois inférieur à la norme légale — une exigence de qualité et de naturel.",
  },
  {
    titre: "Mise en bouteilles sur site",
    detail:
      "Nous disposons de notre propre chaîne de mise en bouteilles, permettant des mises quotidiennes pour atteindre nos objectifs d'exigence jusque dans les détails d'étiquetage.",
  },
];

export default function LaCavePage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-end pb-16 pt-32"
        style={{
          background: "linear-gradient(to bottom, #0f0a18 0%, #1a0f0a 100%)",
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
            La cave du Château de Saint-Martin
          </h1>
          <div className="section-divider" />
        </div>
      </section>

      {/* Deux caves */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-[#c8a96e] text-xs tracking-widest uppercase mb-3" style={{ fontFamily: "var(--font-sans)" }}>
              Cave moderne
            </p>
            <h2 className="text-3xl text-[#1a0f0a] mb-4" style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}>
              Cave de vinification
            </h2>
            <p className="text-[#5c4a3a] leading-relaxed" style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem" }}>
              Ultra moderne avec ses cuves en inox, construite en briques monomur permettant une isolation thermique naturelle extrêmement intéressante.
              La technologie au service de la précision.
            </p>
          </div>
          <div>
            <p className="text-[#c8a96e] text-xs tracking-widest uppercase mb-3" style={{ fontFamily: "var(--font-sans)" }}>
              Cave historique
            </p>
            <h2 className="text-3xl text-[#1a0f0a] mb-4" style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}>
              Cave d&apos;élevage
            </h2>
            <p className="text-[#5c4a3a] leading-relaxed" style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem" }}>
              Construite par les Moines de Lérins, elle est remarquable pour sa voûte en anse de panier, ses doubles ouvertures et la taille de la pierre ajustée.
              Elle est encore exploitée aujourd&apos;hui.
            </p>
          </div>
        </div>
      </section>

      {/* Atouts */}
      <section className="py-16 bg-[#faf8f4]">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl text-center text-[#1a0f0a] mb-4"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
          >
            Notre approche en cave
          </h2>
          <div className="section-divider mb-12" />
          <div className="grid md:grid-cols-2 gap-8">
            {atouts.map((a) => (
              <div key={a.titre} className="border-l-2 border-[#c8a96e] pl-6">
                <h3
                  className="text-xl text-[#1a0f0a] mb-2"
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
        </div>
      </section>

      {/* Back */}
      <section className="py-12 bg-white text-center">
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
