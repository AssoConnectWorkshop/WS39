import Image from "next/image";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

// ─── Data (contenu réel du site) ─────────────────────────────────────────────

const histoireTimeline = [
  {
    era: "Préhistoire",
    title: "Aux origines",
    text: "Des formes géométriques taillées dans la pierre et une pierre à sacrifice ont été découvertes sur les terres de Saint-Martin, témoignant de la présence d'une civilisation très ancienne.",
  },
  {
    era: "-48 av. JC",
    title: "La villa gallo-romaine",
    text: "Valerius, officier supérieur de la VIIIe Légion Augusta, reçoit cette terre de l'Empereur César. Il y bâtit l'un des premiers grands domaines viti-oléicoles de France. La villa gallo-romaine de 10 000 m² fut habitée pendant 8 siècles.",
  },
  {
    era: "Xe – XVIIIe siècle",
    title: "Le prieuré viticole",
    text: "Saint-Martin devient un prieuré viticole. Les moines de Lérins construisent une superbe cave souterraine des XIIe et XVIe siècles, encore exploitée aujourd'hui.",
  },
  {
    era: "1740",
    title: "Le Château de famille",
    text: "Le Marquis de Villeneuve Bargemon rachète l'antique prieuré et fait construire le Château pour l'offrir en dot au mariage de sa fille Anne Marie avec le Comte de Juigné. Depuis, le Château se transmet presque toujours de Comtesse en Comtesse.",
  },
  {
    era: "Aujourd'hui",
    title: "Adeline de Barry",
    text: "Adeline de Barry, 11e génération de la famille, tient à raconter cette riche histoire à travers ses vins. En 2018, elle et Renaud de Barry ramènent dans le giron familial la Liquoristerie de Provence.",
  },
];

const terroir = [
  {
    zone: "Zone Nord",
    subtitle: "Formations du Trias supérieur",
    age: "-201 à -252 Ma",
    soils: ["Argile en couche d'1 mètre", "Calcaires vermiculés de l'âge primaire"],
    color: "#c8a96e",
  },
  {
    zone: "Zone Sud",
    subtitle: "Formations cristallines des Maures",
    age: "Massif des Maures",
    soils: ["Schistes rouges", "Grès grossiers", "Argiles fines", "Grains de quartz et limon"],
    color: "#8b3a2a",
  },
];

const wineCategories = [
  { name: "Nos Crus Classés", desc: "L'excellence du terroir de Taradeau, expression pure des Côtes de Provence.", color: "#b84c2e", icon: "◆" },
  { name: "Éditions Limitées", desc: "Des cuvées d'exception, produites en quantité limitée pour les passionnés.", color: "#7a2020", icon: "◈" },
  { name: "Le Cœur de Gamme", desc: "L'accessibilité de l'excellence : nos vins du quotidien, toujours Cru Classé.", color: "#c8a96e", icon: "◉" },
  { name: "Vieux Millésimes", desc: "Des bouteilles de collection issues de nos meilleures années.", color: "#3d1f1f", icon: "◇" },
  { name: "Nos Spécialités", desc: "Vin cuit, marc de Provence, Bulles de rosé — les trésors de la cave.", color: "#5c3a1e", icon: "◎" },
  { name: "By Saint Martin", desc: "AOP Côtes de Provence & IGP Méditerranée — nos raisins et ceux de nos voisins.", color: "#4a6741", icon: "◑" },
];

const receptionHours = [
  {
    period: "1er Oct. → 30 Mars",
    days: "Lundi au samedi",
    hours: "10h – 13h et 14h – 18h",
    note: "Fermé le dimanche (sauf événement)",
  },
  {
    period: "1er Avr. → 30 Sept.",
    days: "7 jours sur 7",
    hours: "10h – 13h et 14h – 18h",
    note: "Jusqu'à 19h du 1er juillet au 31 août",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SaintMartinPage() {
  return (
    <>
      <Navigation />

      {/* ── HERO 3 PANNEAUX ────────────────────────────────────────────────── */}
      <section className="min-h-screen grid lg:grid-cols-[1fr_340px_1fr]">
        {/* Panneau gauche — Vins */}
        <a href="#vins" className="relative flex items-end group overflow-hidden cursor-pointer" style={{ minHeight: "100vh" }}>
          <Image src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=85" alt="Nos vins" fill className="object-cover group-hover:scale-105 transition-transform duration-700" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.08) 60%)" }} />
          <div className="relative z-10 p-10 pb-16">
            <h2 className="text-white text-5xl md:text-6xl font-light mb-3" style={{ fontFamily: "var(--font-serif)" }}>Nos Vins</h2>
            <p className="text-white/80 text-base mb-8" style={{ fontFamily: "var(--font-sans)" }}>Une gamme de vins élégants et raffinés</p>
            <span className="inline-flex items-center gap-4 px-7 py-3.5 text-white text-sm tracking-widest uppercase" style={{ background: "#b84c2e", fontFamily: "var(--font-sans)" }}>
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none"><path d="M0 5h18M13 1l5 4-5 4" stroke="white" strokeWidth="1.5" /></svg>
              Découvrir
            </span>
          </div>
        </a>

        {/* Panneau centre — Identité */}
        <div className="flex flex-col items-center justify-center text-center px-8 py-16 gap-5" style={{ background: "#f5ede0" }}>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[#2c1810] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-sans)" }}>Château de</p>
            <h1 className="text-[#2c1810] text-3xl md:text-4xl font-semibold leading-tight" style={{ fontFamily: "var(--font-serif)" }}>SAINT–MARTIN</h1>
          </div>
          <div className="flex items-center gap-4 my-1">
            <span className="text-[#2c1810] text-lg font-light" style={{ fontFamily: "var(--font-serif)" }}>17</span>
            <div className="w-16 h-16 rounded-full border-2 border-[#2c1810] flex items-center justify-center">
              <svg viewBox="0 0 64 64" width="50" height="50" fill="none">
                <circle cx="32" cy="32" r="28" stroke="#2c1810" strokeWidth="1.5" />
                <path d="M20 42 Q24 28 32 24 Q40 28 44 42" stroke="#2c1810" strokeWidth="1.2" fill="none" />
                <circle cx="32" cy="20" r="4" stroke="#2c1810" strokeWidth="1.2" />
                <path d="M26 30 Q32 34 38 30" stroke="#2c1810" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <span className="text-[#2c1810] text-lg font-light" style={{ fontFamily: "var(--font-serif)" }}>40</span>
          </div>
          <p className="text-[#2c1810] text-xs tracking-[0.3em] uppercase border border-[#2c1810] px-4 py-1.5" style={{ fontFamily: "var(--font-sans)" }}>Cru Classé</p>
          <div className="w-8 h-px my-1" style={{ background: "#b84c2e" }} />
          <div className="text-[#5c4a3a] text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
            <p>{siteConfig.contact.address}</p>
            <p>{siteConfig.contact.city}</p>
            <p className="mt-2">{siteConfig.contact.phone}</p>
          </div>
          <div className="flex gap-3 mt-1">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-[#2c1810]/50 hover:text-[#b84c2e] transition-colors" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-[#2c1810]/50 hover:text-[#b84c2e] transition-colors" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="text-[#2c1810]/50 hover:text-[#b84c2e] transition-colors" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" /></svg>
            </a>
          </div>
        </div>

        {/* Panneau droit — Vous recevoir */}
        <a href="#recevoir" className="relative flex items-end group overflow-hidden cursor-pointer" style={{ minHeight: "100vh" }}>
          <Image src="https://images.unsplash.com/photo-1474722883778-792e7990302f?w=1200&q=85" alt="Vous recevoir au château" fill className="object-cover group-hover:scale-105 transition-transform duration-700" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.08) 60%)" }} />
          <div className="relative z-10 p-10 pb-16">
            <h2 className="text-white text-5xl md:text-6xl font-light mb-3" style={{ fontFamily: "var(--font-serif)" }}>Vous recevoir</h2>
            <p className="text-white/80 text-base mb-8" style={{ fontFamily: "var(--font-sans)" }}>Mille façons d&apos;être reçu à Saint Martin</p>
            <span className="inline-flex items-center gap-4 px-7 py-3.5 text-white text-sm tracking-widest uppercase" style={{ background: "#7a2020", fontFamily: "var(--font-sans)" }}>
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none"><path d="M0 5h18M13 1l5 4-5 4" stroke="white" strokeWidth="1.5" /></svg>
              Visiter
            </span>
          </div>
        </a>
      </section>

      {/* ── HISTOIRE ──────────────────────────────────────────────────────── */}
      <section id="domaine" className="py-28 px-6" style={{ background: "#faf8f4" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#b84c2e] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "var(--font-sans)" }}>Notre Histoire</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#2c1810] mb-5" style={{ fontFamily: "var(--font-serif)" }}>Vingt Siècles d&apos;Histoire</h2>
            <div className="w-12 h-px bg-[#b84c2e] mx-auto mb-6" />
            <p className="text-[#5c4a3a] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
              Le Château de Saint Martin est un beau domaine viticole de <strong>100 hectares</strong> dont <strong>50 en vignes</strong>. Des Romains à Adeline de Barry, 11e génération, chaque époque a laissé une empreinte indélébile sur ce terroir d&apos;exception.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px hidden md:block" style={{ background: "linear-gradient(to bottom, transparent, #b84c2e 15%, #b84c2e 85%, transparent)" }} />
            {histoireTimeline.map((item, i) => (
              <div key={item.era} className={`relative flex gap-8 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}>
                <div className="flex-1">
                  <div className="bg-white p-6" style={{ boxShadow: "0 2px 20px rgba(44,24,16,0.07)" }}>
                    <p className="text-[#b84c2e] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-sans)" }}>{item.era}</p>
                    <h3 className="text-xl font-light text-[#2c1810] mb-2" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</h3>
                    <p className="text-[#5c4a3a] text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>{item.text}</p>
                  </div>
                </div>
                <div className="hidden md:flex items-start justify-center w-6 flex-shrink-0 pt-6">
                  <div className="w-3 h-3 rounded-full border-2 border-[#b84c2e]" style={{ background: "#faf8f4" }} />
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TERROIR ─────────────────────────────────────────────────────────── */}
      <section className="py-28 px-6" style={{ background: "#2c1810" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#d4a882] text-xs tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "var(--font-sans)" }}>Le Terroir</p>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-5" style={{ fontFamily: "var(--font-serif)" }}>Un terroir Riche &amp; Unique</h2>
            <p className="text-[#d4a882] text-base italic mb-6" style={{ fontFamily: "var(--font-serif)" }}>« Identité et Authenticité préservées »</p>
            <div className="w-12 h-px bg-[#d4a882] mb-8" />
            <p className="text-white/70 leading-relaxed mb-4" style={{ fontFamily: "var(--font-sans)" }}>
              Le domaine est situé à une altitude de <strong className="text-white">130 mètres</strong>. Des TERRES, des VIGNES, et des VINS… DE CARACTÈRE !
            </p>
            <p className="text-white/70 leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
              2 zones géologiques apportent une grande variété et complexité aux vins, donnant à chaque cuvée une identité singulière et profonde.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {terroir.map((zone) => (
              <div key={zone.zone} className="p-6" style={{ background: "rgba(255,255,255,0.05)", borderLeft: `3px solid ${zone.color}` }}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-[#d4a882] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-sans)" }}>{zone.zone}</p>
                    <h3 className="text-white text-lg font-light" style={{ fontFamily: "var(--font-serif)" }}>{zone.subtitle}</h3>
                  </div>
                  <span className="text-white/40 text-xs mt-1" style={{ fontFamily: "var(--font-sans)" }}>{zone.age}</span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {zone.soils.map((s) => (
                    <li key={s} className="text-xs px-2 py-1 text-white/60 border border-white/10" style={{ fontFamily: "var(--font-sans)" }}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOS VINS ────────────────────────────────────────────────────────── */}
      <section id="vins" className="py-28 px-6" style={{ background: "#f5ede0" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#b84c2e] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "var(--font-sans)" }}>La Cave</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#2c1810] mb-5" style={{ fontFamily: "var(--font-serif)" }}>Nos Vins</h2>
            <div className="w-12 h-px bg-[#b84c2e] mx-auto mb-5" />
            <p className="text-[#5c4a3a] max-w-xl mx-auto text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
              Crus Classés Côtes de Provence · AOP Côtes de Provence · IGP Méditerranée<br />
              Vins, spécialités provençales, vin cuit, marc de Provence et Bulles de rosé.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wineCategories.map((cat) => (
              <a key={cat.name} href="#boutique" className="bg-white group overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col" style={{ boxShadow: "0 4px 24px rgba(44,24,16,0.07)" }}>
                <div className="h-1.5 w-full" style={{ background: cat.color }} />
                <div className="p-8 flex-1">
                  <div className="text-3xl mb-4" style={{ color: cat.color, fontFamily: "var(--font-serif)" }}>{cat.icon}</div>
                  <h3 className="text-xl font-light text-[#2c1810] mb-3" style={{ fontFamily: "var(--font-serif)" }}>{cat.name}</h3>
                  <p className="text-[#5c4a3a] text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>{cat.desc}</p>
                </div>
                <div className="px-8 pb-6">
                  <span className="text-xs tracking-widest uppercase border-b pb-0.5" style={{ color: cat.color, borderColor: cat.color, fontFamily: "var(--font-sans)" }}>
                    Découvrir →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── VOUS RECEVOIR ────────────────────────────────────────────────────── */}
      <section id="recevoir" className="py-28 px-6" style={{ background: "#faf8f4" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#b84c2e] text-xs tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "var(--font-sans)" }}>Caveau de Dégustation</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#2c1810] mb-6 leading-tight" style={{ fontFamily: "var(--font-serif)" }}>Vous recevoir</h2>
            <div className="w-12 h-px bg-[#b84c2e] mb-8" />
            <p className="text-[#5c4a3a] leading-relaxed mb-10" style={{ fontFamily: "var(--font-sans)" }}>
              Nous vous attendons sur le domaine pour une belle dégustation des vins du Château. Notre caveau de dégustation est ouvert toute l&apos;année. Retrouvez également les <strong>VinoSpirit Expériences</strong> pour des visites guidées et dégustations commentées.
            </p>
            <div className="flex flex-col gap-5">
              {receptionHours.map((h) => (
                <div key={h.period} className="p-6 border-l-2 border-[#b84c2e]" style={{ background: "#f0ebe3" }}>
                  <p className="text-[#b84c2e] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-sans)" }}>{h.period}</p>
                  <p className="text-[#2c1810] font-medium mb-1" style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem" }}>{h.days}</p>
                  <p className="text-[#5c4a3a] text-sm" style={{ fontFamily: "var(--font-sans)" }}>{h.hours}</p>
                  <p className="text-[#8c7b6b] text-xs mt-1 italic" style={{ fontFamily: "var(--font-sans)" }}>{h.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Image src="https://images.unsplash.com/photo-1474625342403-e7990c910e10?w=900&q=80" alt="Caveau de dégustation" width={900} height={600} className="w-full h-[420px] object-cover mb-6" />
            <div className="p-6 bg-white" style={{ boxShadow: "0 4px 24px rgba(44,24,16,0.07)" }}>
              <p className="text-[#b84c2e] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-sans)" }}>Également sur le domaine</p>
              <h3 className="text-lg font-light text-[#2c1810] mb-2" style={{ fontFamily: "var(--font-serif)" }}>Liquoristerie de Provence</h3>
              <p className="text-[#5c4a3a] text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
                Absinthes, pastis, liqueurs et spiritueux artisanaux premium produits sur le site du Château depuis 2018.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOUTIQUE CTA ─────────────────────────────────────────────────────── */}
      <section id="boutique" className="relative py-32 px-6" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=1920&q=85')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0" style={{ background: "rgba(44,24,16,0.78)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[#d4a882] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "var(--font-sans)" }}>Boutique en ligne</p>
          <h2 className="text-white text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: "var(--font-serif)" }}>Commander nos vins</h2>
          <div className="w-12 h-px bg-[#d4a882] mx-auto mb-8" />
          <p className="text-white/75 leading-relaxed mb-10 max-w-xl mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
            Crus Classés, éditions limitées, spécialités provençales — toute la richesse du Château de Saint-Martin, livrée chez vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.vins.chateaudesaintmartin.com/boutique/" target="_blank" rel="noopener noreferrer" className="px-10 py-4 text-[#2c1810] text-xs tracking-widest uppercase hover:opacity-90 transition-opacity" style={{ background: "#d4a882", fontFamily: "var(--font-sans)" }}>
              Accéder à la boutique
            </a>
            <a href="#contact" className="px-10 py-4 text-white text-xs tracking-widest uppercase border border-white/40 hover:border-white transition-colors" style={{ fontFamily: "var(--font-sans)" }}>
              Commander par téléphone
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-28 px-6" style={{ background: "#2c1810" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <p className="text-[#d4a882] text-xs tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "var(--font-sans)" }}>Contact &amp; Infos pratiques</p>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: "var(--font-serif)" }}>Venez nous rendre visite</h2>
            <div className="w-12 h-px bg-[#d4a882] mb-10" />
            <div className="flex flex-col gap-6 mb-10">
              {[
                { label: "Adresse", value: `${siteConfig.contact.address}, ${siteConfig.contact.city}` },
                { label: "Téléphone", value: siteConfig.contact.phone, href: "tel:+33494997676" },
                { label: "Fax", value: siteConfig.contact.fax },
                { label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <p className="text-[#d4a882] text-xs tracking-widest uppercase mb-1.5" style={{ fontFamily: "var(--font-sans)" }}>{label}</p>
                  {href ? (
                    <a href={href} className="text-white/70 hover:text-white transition-colors text-sm" style={{ fontFamily: "var(--font-sans)" }}>{value}</a>
                  ) : (
                    <p className="text-white/70 text-sm" style={{ fontFamily: "var(--font-sans)" }}>{value}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <p className="text-[#d4a882] text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-sans)" }}>Nous suivre</p>
              <div className="flex flex-wrap gap-4">
                {[
                  { href: siteConfig.social.facebook, label: "Facebook" },
                  { href: siteConfig.social.instagram, label: "Instagram" },
                  { href: siteConfig.social.twitter, label: "Twitter" },
                  { href: siteConfig.social.youtube, label: "YouTube" },
                ].map(({ href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#d4a882] text-xs tracking-widest uppercase transition-colors" style={{ fontFamily: "var(--font-sans)" }}>{label}</a>
                ))}
              </div>
            </div>
          </div>
          <div><ContactForm /></div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="py-8 px-6 border-t" style={{ background: "#2c1810", borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/30" style={{ fontFamily: "var(--font-sans)" }}>
            <span>© {new Date().getFullYear()} Château de Saint-Martin</span>
            <a href="#" className="hover:text-white/60 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white/60 transition-colors">CGV</a>
            <a href="#" className="hover:text-white/60 transition-colors">Politique de confidentialité</a>
          </div>
          <p className="text-[#d4a882]/50 text-xs" style={{ fontFamily: "var(--font-sans)" }}>
            L&apos;abus d&apos;alcool est dangereux pour la santé — À consommer avec modération
          </p>
        </div>
      </footer>
    </>
  );
}
