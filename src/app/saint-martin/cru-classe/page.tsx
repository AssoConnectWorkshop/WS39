import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Cru Classé",
  description: "Le titre de Cru Classé — une reconnaissance exigeante des Côtes de Provence depuis 1955.",
};

const milestones = [
  {
    year: "1895",
    title: "Création de l'Association des Propriétaires Vignerons du Var",
    detail:
      "1ère reconnaissance des Crus Classés pour 23 domaines sélectionnés par l'INAO pour leur terroir, leur climatologie, leur noble encépagement et leur savoir-faire.",
  },
  {
    year: "1955",
    title: "Obtention du titre de Cru Classé",
    detail:
      "Le Château de Saint-Martin obtient le titre de Cru Classé Côtes de Provence — une reconnaissance de l'excellence de son terroir et de ses vins.",
  },
  {
    year: "2001",
    title: "Création du GIE",
    detail:
      "Création du Groupement d'Intérêt Économique (GIE) des Crus Classés de Provence, réunissant les domaines pour promouvoir l'excellence de l'appellation.",
  },
  {
    year: "2005",
    title: "Signature d'une charte d'excellence",
    detail:
      "Signature d'une charte d'excellence par les domaines Crus Classés, renforçant les exigences qualitatives et l'engagement pour la typicité des vins de Provence.",
  },
  {
    year: "Aujourd'hui",
    title: "18 Crus Classés de Provence",
    detail:
      "Il existe aujourd'hui 18 Crus Classés de Provence, issus de l'homologation « Côtes de Provence ». Le Château de Saint-Martin en fait partie avec fierté.",
  },
];

export default function CruClassePage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-end pb-16 pt-32"
        style={{
          background: "linear-gradient(to bottom, #3d0f0f 0%, #1a0f0a 100%)",
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
            className="text-5xl md:text-6xl text-white mb-3"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Le titre de Cru Classé
          </h1>
          <p
            className="text-white/60 text-lg mb-6"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
          >
            Une reconnaissance exigeante
          </p>
          <div className="section-divider" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#faf8f4]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-[#5c4a3a] text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            La dénomination Cru Classé Côtes de Provence est la référence du rosé dans le monde.
            Au Château de Saint-Martin, nous produisons des Crus Classés en rosé, blanc et rouge — parmi les rares domaines à offrir les trois couleurs dans cette appellation prestigieuse.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-8 pb-10">
                <div className="w-28 shrink-0 text-right pt-1">
                  <span
                    className="text-[#6b1c1c] text-sm font-semibold tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {m.year}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#6b1c1c] shrink-0 mt-1.5" />
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-[#e8d5a3] mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <h2
                    className="text-2xl text-[#1a0f0a] mb-2"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
                  >
                    {m.title}
                  </h2>
                  <p
                    className="text-[#5c4a3a] leading-relaxed"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem" }}
                  >
                    {m.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Boutique */}
      <section className="py-16 bg-[#2c1810] text-center">
        <p
          className="text-white/70 text-lg mb-6 max-w-2xl mx-auto px-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Découvrez nos Crus Classés en rosé, blanc et rouge dans la boutique.
        </p>
        <a
          href="/saint-martin/boutique"
          className="inline-block bg-[#c8a96e] text-[#1a0f0a] px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#e8d5a3] transition-colors"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Voir la boutique
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
