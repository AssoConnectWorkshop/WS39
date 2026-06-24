import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "L'Histoire",
  description: "Vingt siècles d'histoire au Château de Saint-Martin, domaine viticole de Provence depuis -48 av. JC.",
};

const timeline = [
  {
    era: "Préhistoire",
    title: "Une civilisation très ancienne",
    content:
      "Des formes géométriques taillées dans la pierre et une pierre à sacrifice ont été découvertes sur les terres de Saint-Martin, témoignant de la présence d'une civilisation datant de la préhistoire.",
  },
  {
    era: "-48 av. JC",
    title: "Le passé Romain",
    content:
      "Valerius, officier supérieur de la très fameuse VIIIe Légion Augusta, est le premier propriétaire et vigneron à Saint-Martin. Cette terre d'exception lui fut offerte par l'empereur César en -48 av. JC, en remerciement de ses hauts services. Il y bâtit l'un des premiers grands domaines viti-oléicoles de France. D'une surface de 10 000 m², cet exceptionnel ensemble architectural gallo-romain — toujours visible aujourd'hui — a été habité pendant 8 siècles.",
  },
  {
    era: "Époque mérovingienne",
    title: "Saint-Martin et les Mérovingiens",
    content:
      "La présence romaine fut relayée par une présence mérovingienne, concrétisée lors des fouilles et de la remise en état de la chapelle en 1950 par le Comte Edme de Rohan Chabot : une fibule et des ossements datés, soigneusement conservés derrière l'autel.",
  },
  {
    era: "Xe – XVIIIe siècle",
    title: "Le prieuré viticole",
    content:
      "Du Xe au XVIIIe siècle, Saint-Martin est un prieuré viticole dans lequel se succèdent différentes congrégations religieuses, toutes dépendantes de l'ordre de Sainte-Victor à Marseille. Le Pape Jean XXII en fit don en 1323 aux religieuses de la Celle Roubaud. Les Moines de Lérins, grands bâtisseurs du domaine, donnèrent un nouvel essor aux vins. La cave est remarquable pour sa voûte en anse de panier, ses doubles ouvertures et la taille de la pierre ajustée de façon très régulière.",
  },
  {
    era: "1740",
    title: "Histoire familiale",
    content:
      "L'histoire du domaine se raconte aussi au féminin. En 1740, l'antique prieuré des moines fut racheté par le Marquis de Villeneuve Bargemon, qui fit construire le Château pour l'offrir en dot pour le mariage de sa fille Anne Marie avec le Comte de Juigné. Depuis 1740, le Château s'est presque toujours transmis de Comtesse en Comtesse, à l'exception du Comte de Rohan Chabot, grande figure du monde viticole et grand-père de la propriétaire actuelle Adeline de Barry, qui représente la 11ème génération de la famille.",
  },
  {
    era: "2018",
    title: "La Liquoristerie de Provence",
    content:
      "En 2018, Adeline et Renaud de Barry ramènent dans le giron familial la Liquoristerie de Provence, une entreprise artisanale premium qui produit, sur le site du Château de Saint-Martin, absinthes, pastis, liqueurs et spiritueux.",
  },
];

export default function HistoirePage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-end pb-16 pt-32"
        style={{
          background: "linear-gradient(to bottom, #1a0f0a 0%, #3d1a0a 100%)",
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
            Vingt Siècles d&apos;Histoire
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
            Le Château de Saint Martin est un beau domaine viticole de 100 hectares dont 50 en vignes.
            L&apos;une des plus grandes richesses du Château de Saint-Martin à Taradeau n&apos;est autre que son histoire.
            Découvrez au fil du temps, des civilisations et des générations, les visages du Château de Saint-Martin
            puis de la grande famille française qui en reprit les rênes en 1750.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-8 pb-12">
                {/* Left: era */}
                <div className="w-36 shrink-0 text-right pt-1">
                  <span
                    className="text-[#c8a96e] text-sm font-semibold tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {item.era}
                  </span>
                </div>
                {/* Timeline dot & line */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#c8a96e] shrink-0 mt-1.5" />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-[#e8d5a3] mt-2" />
                  )}
                </div>
                {/* Content */}
                <div className="flex-1 pb-4">
                  <h2
                    className="text-2xl text-[#1a0f0a] mb-3"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
                  >
                    {item.title}
                  </h2>
                  <p
                    className="text-[#5c4a3a] leading-relaxed"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem" }}
                  >
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to domain */}
      <section className="py-16 bg-[#faf8f4] text-center">
        <a
          href="/saint-martin"
          className="inline-block border border-[#c8a96e] text-[#c8a96e] px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#c8a96e] hover:text-white transition-colors"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Retour au domaine
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a0f0a] py-10 text-center">
        <p className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-sans)" }}>
          © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.contact.city}
        </p>
      </footer>
    </>
  );
}
