import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "La Vigne",
  description: "La vigne du Château de Saint-Martin — diversité des senteurs de la Provence sur 50 hectares.",
};

const pratiques = [
  {
    titre: "50 hectares de vignes",
    detail:
      "Environ 40 hectares en production et 10 en « travail » (jachères, assolement, ou replantation). Équilibre entre vignes très anciennes (30 à 80 ans), vignes en pleine maturité et jeunes vignes.",
    icon: "🍇",
  },
  {
    titre: "Traitements raisonnés",
    detail:
      "La vigne n'est traitée que lorsqu'elle présente une maladie. Les méthodes naturelles sont privilégiées. Utilisation d'huiles essentielles permettant de diminuer de 50 % à 80 % les doses de produits conventionnels.",
    icon: "🌿",
  },
  {
    titre: "Polyculture & biodiversité",
    detail:
      "La polyculture est la norme de la vigne. Retour de nombreux insectes, animaux, plantes qui permettent à la Nature de bien vivre. Présence de nombreux arbres, haies, zones boisées. Création d'engrais verts.",
    icon: "🦋",
  },
  {
    titre: "Nombreux cépages",
    detail:
      "Nous privilégions l'utilisation de nombreux cépages pour apporter une complexité intéressante et permettre de jouer avec la gamme de vins — retrouver la diversité des senteurs de la Provence.",
    icon: "🌸",
  },
];

export default function LaVignePage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-end pb-16 pt-32"
        style={{
          background: "linear-gradient(to bottom right, #1a2a10 0%, #2a1a0a 100%)",
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
            La vigne, diversité des senteurs de la Provence
          </h1>
          <div className="section-divider" />
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 bg-[#faf8f4]">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {pratiques.map((p) => (
            <div key={p.titre} className="bg-white p-8 border border-[#e8d5a3]">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h2
                className="text-2xl text-[#1a0f0a] mb-3"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
              >
                {p.titre}
              </h2>
              <p
                className="text-[#5c4a3a] leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem" }}
              >
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Démarche CTA */}
      <section className="py-16 bg-[#2c1810] text-center">
        <p
          className="text-white/70 text-lg mb-6 max-w-2xl mx-auto px-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Notre démarche agro-responsable va bien au-delà de la vigne — une vision globale et durable pour le domaine.
        </p>
        <a
          href="/saint-martin/la-demarche-agro-responsable"
          className="inline-block border border-[#c8a96e] text-[#c8a96e] px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#c8a96e] hover:text-white transition-colors"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Découvrir notre démarche
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
