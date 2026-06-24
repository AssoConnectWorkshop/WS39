import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Démarche Agro-responsable",
  description: "Une vraie agriculture de régénération au Château de Saint-Martin — 100 hectares engagés pour la biodiversité.",
};

const actions = [
  "Engrais vert semis directs",
  "Agroforesterie",
  "Aménagements paysagers pour la faune (haies, arbres…)",
  "Fertilisation organique et non chimique",
  "Protection phytosanitaire raisonnée",
  "Gestion globale de l'eau",
  "Réserve nationale naturelle",
  "Centre de protection des oiseaux",
];

const chiffres = [
  { value: "50 %", label: "de vignes et cultures inter-rangs" },
  { value: "25 %", label: "de terres en jachère" },
  { value: "25 %", label: "de bois" },
  { value: "50 ans", label: "de protection des oiseaux" },
];

export default function DemarcheAgroPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-end pb-16 pt-32"
        style={{
          background: "linear-gradient(to bottom right, #0a1a0a 0%, #1a2a10 100%)",
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
            Une vraie agriculture de régénération
          </h1>
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
            Le Château s&apos;inspire des fondamentaux de chaque mouvement : agriculture raisonnée, bio, biodynamie,
            pour en prendre le meilleur… et formuler ainsi sa propre vision éco-responsable.
            Opposée aux traitements et fertilisations de synthèse, la démarche du Château n&apos;est pas labellisée :
            elle précède les labels.
          </p>
        </div>
      </section>

      {/* Chiffres */}
      <section className="py-16 bg-[#2c1810]">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl text-center text-white mb-4"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Saint-Martin : 100 hectares dont…
          </h2>
          <div className="section-divider mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {chiffres.map((c) => (
              <div key={c.value} className="text-center border border-white/20 p-6">
                <div
                  className="text-4xl text-[#c8a96e] mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {c.value}
                </div>
                <p
                  className="text-white/60 text-xs tracking-wider uppercase"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision durable */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl text-[#1a0f0a] mb-4"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
              >
                Une affaire multi-générationnelle
              </h2>
              <p
                className="text-[#5c4a3a] leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem" }}
              >
                Déjà le père de l&apos;actuelle propriétaire, le Comte Bruno de Gasquet, dans les années 60,
                passait pour un original avec l&apos;herbe qui poussait dans ses vignes.
                Déjà adepte d&apos;une gestion intégrée, il évitait les traitements chimiques systématiques.
              </p>
              <p
                className="text-[#5c4a3a] leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem" }}
              >
                Aujourd&apos;hui, Saint-Martin travaille sur les labels de demain : les Sols vivants, la Filière bas carbone.
                Objectifs : conserver et développer un agro-écosystème durable, fournir des produits loyaux, sains et tracés.
              </p>
            </div>
            <div>
              <h2
                className="text-3xl text-[#1a0f0a] mb-4"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
              >
                Nos actions
              </h2>
              <ul className="space-y-3">
                {actions.map((a) => (
                  <li key={a} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e] shrink-0" />
                    <span
                      className="text-[#5c4a3a]"
                      style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem" }}
                    >
                      {a}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
