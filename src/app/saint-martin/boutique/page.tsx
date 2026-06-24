import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Boutique",
  description: "Commandez en ligne les vins du Château de Saint-Martin — Crus Classés, Éditions limitées, Vieux Millésimes.",
};

type Wine = {
  name: string;
  price: string;
  description: string;
  category: string;
  badge?: string;
  image?: string;
};

const wines: Wine[] = [
  // Crus Classés
  {
    name: "Comtesse de Saint-Martin Rosé",
    price: "31,90 €",
    description: "Cru Classé · Côtes de Provence · 2021 · 75cl",
    category: "Nos Crus Classés",
    badge: "Offre 2+1",
    image: "/images/boutique/comtesse-rose.jpg",
  },
  {
    name: "Grande Réserve Rosé",
    price: "À partir de 20,90 €",
    description: "Cru Classé · Côtes de Provence · 2025 · 75cl et 150cl",
    category: "Nos Crus Classés",
    image: "/images/boutique/grande-reserve-rose.jpg",
  },
  {
    name: "Magnum – Grande Réserve Rosé",
    price: "40,90 €",
    description: "Cru Classé · Côtes de Provence · 2025 · 150cl",
    category: "Nos Crus Classés",
    image: "/images/boutique/grande-reserve-magnum.jpg",
  },
  {
    name: "Grande Réserve Blanc",
    price: "22,90 €",
    description: "Cru Classé · Côtes de Provence · 2024 · 75cl et 150cl",
    category: "Nos Crus Classés",
    image: "/images/boutique/grande-reserve-blanc.jpg",
  },
  {
    name: "Grande Réserve Rouge",
    price: "24,90 €",
    description: "Cru Classé · Côtes de Provence · 75cl",
    category: "Nos Crus Classés",
    image: "/images/boutique/grande-reserve-rouge.jpg",
  },
  {
    name: "Éternelle Favorite Rosé",
    price: "25,50 €",
    description: "Cru Classé · Côtes de Provence · 2025 · 75cl",
    category: "Nos Crus Classés",
    image: "/images/boutique/eternelle-favorite.jpg",
  },
  {
    name: "Génération 11 Rosé",
    price: "17,90 €",
    description: "Cru Classé · Côtes de Provence · 2024 · 75cl",
    category: "Nos Crus Classés",
    image: "/images/boutique/generation-11-rose.jpg",
  },
  {
    name: "Génération 11 Rouge",
    price: "17,90 €",
    description: "Cru Classé · Côtes de Provence · 2024 · 75cl",
    category: "Nos Crus Classés",
    image: "/images/boutique/generation-11-rouge.jpg",
  },
  {
    name: "Comtesse de Saint-Martin Blanc",
    price: "31,90 €",
    description: "Cru Classé · Côtes de Provence · 2024 · 75cl",
    category: "Nos Crus Classés",
    image: "/images/boutique/comtesse-blanc.jpg",
  },
  {
    name: "Comtesse de Saint-Martin Rouge",
    price: "32,90 €",
    description: "Cru Classé · Côtes de Provence · 2022 · 75cl",
    category: "Nos Crus Classés",
    image: "/images/boutique/comtesse-rouge.jpg",
  },
  // Le cœur de gamme
  {
    name: "N°2 Rosé",
    price: "14,90 €",
    description: "Côtes de Provence · 2025 · 75cl",
    category: "Le cœur de gamme",
    image: "/images/boutique/n2-rose.jpg",
  },
  {
    name: "N°2 Rouge",
    price: "15,90 €",
    description: "Côtes de Provence · 2022 · 75cl",
    category: "Le cœur de gamme",
    image: "/images/boutique/n2-rouge.jpg",
  },
  {
    name: "Carpe Horam Rosé",
    price: "10,90 €",
    description: "IGP Méditerranée · 2025 · 75cl",
    category: "Le cœur de gamme",
    image: "/images/boutique/carpe-horam-rose.jpg",
  },
  {
    name: "Carpe Horam Blanc",
    price: "10,90 €",
    description: "IGP Méditerranée · 2024 · 75cl",
    category: "Le cœur de gamme",
    image: "/images/boutique/carpe-horam-blanc.jpg",
  },
  {
    name: "Carpe Horam Rouge",
    price: "10,90 €",
    description: "IGP Méditerranée · 75cl",
    category: "Le cœur de gamme",
    image: "/images/boutique/carpe-horam-rouge.jpg",
  },
  {
    name: "Rose&Roll",
    price: "9,90 €",
    description: "IGP Méditerranée · 75cl",
    category: "Le cœur de gamme",
    image: "/images/boutique/roseroll.jpg",
  },
  // By Saint Martin
  {
    name: "X Quise Rosé",
    price: "12,90 €",
    description: "X Quise rosé · 2025",
    category: "By Saint Martin",
    image: "/images/boutique/x-quise-rose.jpg",
  },
  {
    name: "X Quise Rouge",
    price: "12,90 €",
    description: "X Quise rouge · 2025",
    category: "By Saint Martin",
    image: "/images/boutique/x-quise-rouge.jpg",
  },
  // Sans Alcool
  {
    name: "Fav0%rite Bulles de Rosé",
    price: "25,40 €",
    description: "Boisson aromatisée à base de vin rosé désalcoolisé gazéifié · Sans alcool 0% · 75cl",
    category: "Sans Alcool – NoLow",
    image: "/images/boutique/fav0rite-bulles.jpg",
  },
  {
    name: "Fav0%rite Tranquille Rosé",
    price: "15,90 €",
    description: "Boisson aromatisée à base de vin rosé désalcoolisé · Sans alcool 0% · 75cl",
    category: "Sans Alcool – NoLow",
    image: "/images/boutique/fav0rite-tranquille.jpg",
  },
  // Vieux Millésimes
  {
    name: "Comte de Rohan Chabot Rouge",
    price: "110,90 €",
    description: "Cru Classé · Côtes de Provence · Vieux millésimes · 75cl",
    category: "Nos Vieux Millésimes",
    image: "/images/boutique/vieux-millesimes-comte-rohan.jpg",
  },
  {
    name: "Comtesse de Saint-Martin Rouge",
    price: "50,00 €",
    description: "Cru Classé · Côtes de Provence · Vieux millésimes · 75cl",
    category: "Nos Vieux Millésimes",
    image: "/images/boutique/vieux-millesimes-comtesse-rouge.jpg",
  },
  {
    name: "Grande Réserve Rouge (Vieux Millésime)",
    price: "35,00 €",
    description: "Cru Classé · Côtes de Provence · Vieux millésimes · 75cl",
    category: "Nos Vieux Millésimes",
    image: "/images/boutique/vieux-millesimes-grande-reserve-rouge.jpg",
  },
  // Spécialités
  {
    name: "Vin cuit de Provence",
    price: "29,90 €",
    description: "Spécialité provençale — style Porto",
    category: "Nos spécialités",
    image: "/images/boutique/vin-cuit.jpg",
  },
  {
    name: "Marc de Provence",
    price: "58,90 €",
    description: "Eau de vie",
    category: "Nos spécialités",
    image: "/images/boutique/marc-de-provence.jpg",
  },
  // Cadeaux
  {
    name: "Coffret Cadeau – 1 bouteille",
    price: "33,50 €",
    description: "Coffret cadeau avec 1 bouteille au choix",
    category: "Idées Cadeaux",
    image: "/images/boutique/coffret-1.jpg",
  },
  {
    name: "Coffret Cadeau – 2 bouteilles",
    price: "48,40 €",
    description: "Coffret cadeau avec 2 bouteilles au choix",
    category: "Idées Cadeaux",
    image: "/images/boutique/coffret-2.jpg",
  },
  {
    name: "Coffret Cadeau – 3 bouteilles",
    price: "44,70 €",
    description: "Coffret cadeau avec 3 bouteilles au choix",
    category: "Idées Cadeaux",
    image: "/images/boutique/coffret-3.jpg",
  },
  {
    name: "Bon Cadeau",
    price: "50,00 €",
    description: "Bon cadeau à utiliser sur la boutique en ligne",
    category: "Idées Cadeaux",
    image: "/images/boutique/bon-cadeau.jpg",
  },
];

const categories = [
  "Nos Crus Classés",
  "Le cœur de gamme",
  "By Saint Martin",
  "Sans Alcool – NoLow",
  "Nos Vieux Millésimes",
  "Nos spécialités",
  "Idées Cadeaux",
];

const categoryDescriptions: Record<string, string> = {
  "Nos Crus Classés":
    "La dénomination Cru Classé Côtes de Provence est la référence du rosé dans le monde. Au Château de Saint-Martin, nous produisons des Crus Classés en rosé, blanc et rouge.",
  "Le cœur de gamme":
    "Des vins accessibles et généreux pour découvrir la typicité des terroirs de Provence.",
  "By Saint Martin":
    "Limités par le classement de ses terres, les propriétaires choisissent avec soin raisins et nectars pour proposer une gamme complémentaire.",
  "Sans Alcool – NoLow":
    "Une nouvelle gamme de rosés désalcoolisés, répondant à une tendance croissante avec une qualité incomparable.",
  "Nos Vieux Millésimes":
    "La plupart de nos millésimes rouges se bonifient en vieillissant. Des bouteilles mises de côté dans notre cave personnelle.",
  "Nos spécialités":
    "Le Château produit également des nectars originaux selon des méthodes traditionnelles : vin cuit, marc de Provence.",
  "Idées Cadeaux":
    "Coffrets cadeaux et bons cadeaux pour offrir le meilleur de Saint-Martin.",
};

const colorMap: Record<string, string> = {
  Rosé: "#d4948a",
  Rouge: "#7a2020",
  Blanc: "#c8b87a",
};

function getAccentColor(name: string): string {
  if (name.toLowerCase().includes("rouge") || name.toLowerCase().includes("rohan")) return colorMap.Rouge;
  if (name.toLowerCase().includes("blanc")) return colorMap.Blanc;
  return colorMap.Rosé;
}

export default function BoutiquePage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section
        className="relative min-h-[40vh] flex items-end pb-16 pt-32"
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
            La boutique
          </h1>
          <div className="section-divider" />
        </div>
      </section>

      {/* Promo banner */}
      <div className="bg-[#c8a96e] py-3 text-center">
        <p
          className="text-[#1a0f0a] text-sm tracking-widest uppercase"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Offre du moment : Comtesse de Saint-Martin Rosé 2021 — achetez 2, obtenez 1 gratuit
        </p>
      </div>

      {/* Nav catégories */}
      <nav className="bg-white border-b border-[#e8d5a3] sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <ul className="flex gap-6 py-4 whitespace-nowrap">
            {categories.map((cat) => (
              <li key={cat}>
                <a
                  href={`#${cat.toLowerCase().replace(/\s+/g, "-").replace(/[éè]/g, "e").replace(/[àâ]/g, "a")}`}
                  className="text-[#5c4a3a] hover:text-[#c8a96e] text-xs tracking-widest uppercase transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Products by category */}
      {categories.map((cat) => {
        const catWines = wines.filter((w) => w.category === cat);
        if (catWines.length === 0) return null;
        const anchorId = cat.toLowerCase().replace(/\s+/g, "-").replace(/[éè]/g, "e").replace(/[àâ]/g, "a");
        return (
          <section key={cat} id={anchorId} className="py-16 bg-[#faf8f4] scroll-mt-28">
            <div className="max-w-7xl mx-auto px-6">
              <h2
                className="text-3xl text-[#1a0f0a] mb-2"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
              >
                {cat}
              </h2>
              {categoryDescriptions[cat] && (
                <p
                  className="text-[#8c7b6b] mb-8 max-w-2xl"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem" }}
                >
                  {categoryDescriptions[cat]}
                </p>
              )}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {catWines.map((wine) => (
                  <div
                    key={wine.name}
                    className="bg-white border border-[#e8d5a3] flex flex-col relative overflow-hidden"
                  >
                    {wine.badge && (
                      <span
                        className="absolute top-4 right-4 z-10 bg-[#c8a96e] text-[#1a0f0a] text-xs px-2 py-1 tracking-wider"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {wine.badge}
                      </span>
                    )}
                    {/* Bottle image */}
                    <div className="relative w-full bg-[#f5f0e8]" style={{ paddingBottom: "100%" }}>
                      {wine.image ? (
                        <Image
                          src={wine.image}
                          alt={wine.name}
                          fill
                          className="object-contain p-4"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ background: getAccentColor(wine.name) + "22" }}
                        >
                          <div
                            className="w-1 h-20 rounded-full opacity-40"
                            style={{ background: getAccentColor(wine.name) }}
                          />
                        </div>
                      )}
                    </div>
                    {/* Info */}
                    <div className="p-5 flex flex-col flex-1">
                      <div
                        className="w-full h-px mb-4"
                        style={{ background: getAccentColor(wine.name) }}
                      />
                      <h3
                        className="text-lg text-[#1a0f0a] mb-2 flex-1"
                        style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
                      >
                        {wine.name}
                      </h3>
                      <p
                        className="text-[#8c7b6b] text-xs mb-4 leading-relaxed"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {wine.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#e8d5a3]">
                        <span
                          className="text-[#1a0f0a] text-lg"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {wine.price}
                        </span>
                        <a
                          href="https://vins.chateaudesaintmartin.com/boutique/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#2c1810] text-white text-xs tracking-widest uppercase px-4 py-2 hover:bg-[#1a0f0a] transition-colors"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          Commander
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

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
