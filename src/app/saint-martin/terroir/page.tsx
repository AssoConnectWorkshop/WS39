import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Le Terroir",
  description: "Un terroir riche et unique — deux zones géologiques exceptionnelles à Taradeau, Provence.",
};

const zones = [
  {
    name: "Zone Nord",
    subtitle: "Formations du Trias supérieur",
    age: "-201 à -252 Ma",
    soils: ["Argile", "Calcaire vermiculé"],
    detail:
      "Formations du Trias supérieur avec une couche d'argile d'un mètre et des calcaires vermiculés de l'âge primaire. Ces sols apportent une belle minéralité et une fraîcheur caractéristique aux vins blancs et rosés.",
    color: "#8c7b6b",
  },
  {
    name: "Zone Sud",
    subtitle: "Formations cristallines des Maures",
    age: "Massif des Maures",
    soils: ["Schistes rouges", "Grès grossiers", "Argiles fines", "Quartz", "Limon"],
    detail:
      "Schistes rouges, grès grossiers, argiles fines avec des grains de quartz et du limon en provenance des éboulis des pentes. Ces terroirs cristallins confèrent aux vins rouges une profondeur et une complexité aromatique unique.",
    color: "#7a2020",
  },
];

export default function TerroirPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-end pb-16 pt-32"
        style={{
          background: "linear-gradient(135deg, #2a1810 0%, #1a2a1a 100%)",
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
            Un terroir Riche &amp; Unique
          </h1>
          <div className="section-divider" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#faf8f4]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-[#c8a96e] text-sm tracking-widest uppercase mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Identité et authenticité préservées
          </p>
          <p
            className="text-[#5c4a3a] text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Le domaine du Château de Saint-Martin est situé à une altitude de 130 mètres.
            Des <strong>terres</strong>, des <strong>vignes</strong>, et des <strong>vins</strong>… de caractère !
          </p>
          <p
            className="text-[#5c4a3a] mt-4 leading-relaxed"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem" }}
          >
            2 zones géologiques distinctes apportent une grande variété et complexité aux vins du Château.
          </p>
        </div>
      </section>

      {/* Zones */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {zones.map((zone) => (
            <div
              key={zone.name}
              className="border border-[#e8d5a3] p-8"
            >
              <div
                className="w-12 h-1 mb-6"
                style={{ background: zone.color }}
              />
              <h2
                className="text-3xl text-[#1a0f0a] mb-1"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
              >
                {zone.name}
              </h2>
              <p
                className="text-[#c8a96e] text-xs tracking-widest uppercase mb-2"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {zone.subtitle}
              </p>
              <p
                className="text-[#8c7b6b] text-xs tracking-widest mb-6"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {zone.age}
              </p>
              <p
                className="text-[#5c4a3a] leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem" }}
              >
                {zone.detail}
              </p>
              <div className="flex flex-wrap gap-2">
                {zone.soils.map((soil) => (
                  <span
                    key={soil}
                    className="px-3 py-1 text-xs tracking-wider border border-[#e8d5a3] text-[#8c7b6b] uppercase"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {soil}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cépages */}
      <section className="py-16 bg-[#2c1810] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl text-white mb-4"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Diversité des cépages
          </h2>
          <div className="section-divider mb-8" />
          <p
            className="text-white/70 leading-relaxed"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem" }}
          >
            La diversité des senteurs de la Provence — décrites et peintes par les artistes — nous voulons les retrouver dans nos vins.
            Nous privilégions l&apos;utilisation de nombreux cépages qui apportent une complexité intéressante et permettent de jouer avec la gamme de vins.
          </p>
        </div>
      </section>

      {/* Back */}
      <section className="py-16 bg-[#faf8f4] text-center">
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
