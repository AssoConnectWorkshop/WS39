import Image from "next/image";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

// ─── Data ────────────────────────────────────────────────────────────────────

const wines = [
  {
    name: "Grande Réserve",
    type: "Rosé",
    appellation: "Côtes de Provence Cru Classé",
    description:
      "Le rosé emblématique du Château. Robe saumonée brillante, nez délicat de fraise des bois et de pêche blanche. Bouche fraîche, élégante, avec une finale minérale caractéristique du terroir de Taradeau.",
    year: "2023",
    color: "#d4948a",
  },
  {
    name: "Cuvée Vieilles Vignes",
    type: "Rouge",
    appellation: "Côtes de Provence Cru Classé",
    description:
      "Issu de nos plus vieilles parcelles de Grenache et Syrah, ce rouge soyeux révèle des arômes complexes de fruits noirs confits, de garrigue et d'épices. Garde recommandée : 5 à 8 ans.",
    year: "2021",
    color: "#7a2020",
  },
  {
    name: "Blanc de Blancs",
    type: "Blanc",
    appellation: "Côtes de Provence Cru Classé",
    description:
      "Assemblage de Rolle et Clairette élevé sur lies fines. Arômes d'agrumes et de fleurs blanches, bouche ample et fraîche avec une belle tension finale. Idéal sur poissons et fruits de mer.",
    year: "2023",
    color: "#c8b87a",
  },
];

const rooms = [
  {
    name: "Suite Panoramique",
    size: "80 m²",
    description:
      "Terrasse privée avec vue sur le vignoble et les Maures. Bain à remous, mobilier provençal d'époque, salon attenant.",
    features: ["Vue vignoble", "Terrasse privée", "Bain à remous", "Petit-déjeuner"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  },
  {
    name: "Chambre Bastide",
    size: "45 m²",
    description:
      "Lumineuse et apaisante, ouvrant sur le parc centenaire. Tomettes provençales, poutres apparentes, atmosphère authentique.",
    features: ["Vue jardin", "Décor authentique", "Climatisation", "Petit-déjeuner"],
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
  },
  {
    name: "Suite Prestige",
    size: "100 m²",
    description:
      "Notre suite la plus somptueuse : salon privatif, cheminée d'époque, terrasse panoramique face aux collines du Var.",
    features: ["Vue panoramique", "Salon privatif", "Cheminée", "Service en chambre"],
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
  },
];

const news = [
  {
    date: "Juin 2026",
    title: "Médaille d'Or au Concours Général Agricole",
    excerpt: "Notre Grande Réserve Rosé 2023 reçoit la plus haute distinction du Concours Général Agricole de Paris.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80",
  },
  {
    date: "Mai 2026",
    title: "Ouverture de la nouvelle cave de vieillissement",
    excerpt: "Fruit de deux années de travaux, notre nouvelle cave enterrée de 800 m² accueille désormais nos plus belles barriques.",
    image: "https://images.unsplash.com/photo-1474625342403-e7990c910e10?w=600&q=80",
  },
  {
    date: "Avril 2026",
    title: "Journées Portes Ouvertes — Printemps du Vignoble",
    excerpt: "Les 12 et 13 avril, le Château vous accueille pour visiter les chais, déguster les nouvelles cuvées et rencontrer notre équipe.",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&q=80",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navigation />

      {/* ── HERO 3 PANNEAUX ────────────────────────────────────────────────── */}
      <section className="min-h-screen grid lg:grid-cols-[1fr_360px_1fr]" style={{ paddingTop: "0" }}>

        {/* Panneau gauche — Vins */}
        <a
          href="#vins"
          className="relative flex items-end group overflow-hidden cursor-pointer"
          style={{ minHeight: "100vh" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=85"
            alt="Nos vins"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%)" }}
          />
          <div className="relative z-10 p-10 pb-16">
            <h2
              className="text-white text-5xl md:text-6xl font-light mb-3"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Nos Vins
            </h2>
            <p className="text-white/80 text-base mb-8" style={{ fontFamily: "var(--font-sans)" }}>
              Une gamme de vins élégants et raffinés
            </p>
            <span
              className="inline-flex items-center gap-4 px-7 py-3.5 text-white text-sm tracking-widest uppercase"
              style={{ background: "#b84c2e", fontFamily: "var(--font-sans)" }}
            >
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                <path d="M0 5h18M13 1l5 4-5 4" stroke="white" strokeWidth="1.5" />
              </svg>
              Découvrir
            </span>
          </div>
        </a>

        {/* Panneau centre — Identité */}
        <div
          className="flex flex-col items-center justify-center text-center px-8 py-16 gap-6"
          style={{ background: "#f5ede0" }}
        >
          <div className="flex flex-col items-center gap-1">
            <p
              className="text-[#2c1810] text-xs tracking-[0.35em] uppercase"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Château de
            </p>
            <h1
              className="text-[#2c1810] text-3xl md:text-4xl font-semibold leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              SAINT–MARTIN
            </h1>
          </div>

          {/* Médaillon */}
          <div className="flex items-center gap-4 my-2">
            <span className="text-[#2c1810] text-lg font-light" style={{ fontFamily: "var(--font-serif)" }}>
              {siteConfig.founded}
            </span>
            <div
              className="w-16 h-16 rounded-full border-2 border-[#2c1810] flex items-center justify-center overflow-hidden"
            >
              <svg viewBox="0 0 64 64" width="52" height="52" fill="none">
                <circle cx="32" cy="32" r="30" stroke="#2c1810" strokeWidth="1.5" />
                {/* Cavalier stylisé */}
                <ellipse cx="32" cy="38" rx="12" ry="7" stroke="#2c1810" strokeWidth="1.2" />
                <circle cx="32" cy="24" r="5" stroke="#2c1810" strokeWidth="1.2" />
                <line x1="32" y1="29" x2="32" y2="36" stroke="#2c1810" strokeWidth="1.2" />
                <line x1="26" y1="32" x2="38" y2="32" stroke="#2c1810" strokeWidth="1.2" />
                <line x1="32" y1="36" x2="28" y2="44" stroke="#2c1810" strokeWidth="1.2" />
                <line x1="32" y1="36" x2="36" y2="44" stroke="#2c1810" strokeWidth="1.2" />
              </svg>
            </div>
            <span className="text-[#2c1810] text-lg font-light" style={{ fontFamily: "var(--font-serif)" }}>
              40
            </span>
          </div>

          <p
            className="text-[#2c1810] text-xs tracking-[0.3em] uppercase border border-[#2c1810] px-4 py-1.5"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Cru Classé
          </p>

          <div className="w-8 h-px bg-[#b84c2e] my-2" />

          <div className="text-[#5c4a3a] text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
            <p>{siteConfig.contact.address}</p>
            <p>{siteConfig.contact.city}</p>
            <p className="mt-3">{siteConfig.contact.phone}</p>
          </div>

          {/* Drapeaux */}
          <div className="flex gap-2 mt-2">
            <span className="text-xl" title="Français">🇫🇷</span>
            <span className="text-xl" title="English">🇬🇧</span>
          </div>
        </div>

        {/* Panneau droit — Recevoir */}
        <a
          href="#recevoir"
          className="relative flex items-end group overflow-hidden cursor-pointer"
          style={{ minHeight: "100vh" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=85"
            alt="Vous recevoir"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%)" }}
          />
          <div className="relative z-10 p-10 pb-16">
            <h2
              className="text-white text-5xl md:text-6xl font-light mb-3"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Vous recevoir
            </h2>
            <p className="text-white/80 text-base mb-8" style={{ fontFamily: "var(--font-sans)" }}>
              Mille façons d&apos;être reçu à Saint Martin
            </p>
            <span
              className="inline-flex items-center gap-4 px-7 py-3.5 text-white text-sm tracking-widest uppercase"
              style={{ background: "#7a2020", fontFamily: "var(--font-sans)" }}
            >
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                <path d="M0 5h18M13 1l5 4-5 4" stroke="white" strokeWidth="1.5" />
              </svg>
              Visiter
            </span>
          </div>
        </a>
      </section>

      {/* ── LE DOMAINE ─────────────────────────────────────────────────────── */}
      <section id="domaine" className="py-28 px-6" style={{ background: "#faf8f4" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p
              className="text-[#b84c2e] text-xs tracking-[0.35em] uppercase mb-5"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Le Domaine
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#2c1810] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Un terroir d&apos;exception
              <br />
              depuis 1740
            </h2>
            <div className="w-12 h-px bg-[#b84c2e] mb-8" />
            <p className="text-[#5c4a3a] leading-relaxed mb-5" style={{ fontFamily: "var(--font-sans)" }}>
              Niché entre le massif des Maures et la montagne Sainte-Victoire, le Château de Saint-Martin est l&apos;un des rares Crus Classés de Provence. Son terroir argilo-calcaire unique, ses 45 hectares de vignes exposées plein sud, et le savoir-faire transmis de génération en génération lui confèrent une identité viticole incomparable.
            </p>
            <p className="text-[#5c4a3a] leading-relaxed mb-10" style={{ fontFamily: "var(--font-sans)" }}>
              Fondé en 1740 par la famille de Gasquet, le domaine perpétue depuis plus de deux siècles une tradition d&apos;excellence, alliant respect du terroir et techniques œnologiques modernes.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: "45", label: "Hectares" },
                { value: "1740", label: "Fondé en" },
                { value: "Cru Classé", label: "Classification" },
              ].map(({ value, label }) => (
                <div key={label} className="border-l-2 border-[#b84c2e] pl-4">
                  <div className="text-3xl text-[#2c1810] font-light mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                    {value}
                  </div>
                  <div className="text-[#8c7b6b] text-xs tracking-wide uppercase" style={{ fontFamily: "var(--font-sans)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1474722883778-792e7990302f?w=900&q=80"
              alt="Château de Saint-Martin"
              width={900}
              height={600}
              className="w-full h-[480px] object-cover"
            />
            <div
              className="absolute -bottom-6 -left-6 w-44 h-44 hidden lg:block border-4 overflow-hidden"
              style={{ borderColor: "#faf8f4" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=400&q=80"
                alt="Vignes"
                width={176}
                height={176}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CITATION ────────────────────────────────────────────────────────── */}
      <div
        className="py-14 px-6 text-center"
        style={{ background: "#2c1810" }}
      >
        <p
          className="text-[#d4a882] text-base md:text-lg max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", lineHeight: "1.8" }}
        >
          &ldquo; Le vin est une chose merveilleusement appropriée à l&apos;homme si, dans la santé comme dans la maladie, on l&apos;administre avec discernement et en juste mesure. &rdquo;
        </p>
        <p className="text-[#8c7b6b] text-xs tracking-widest uppercase mt-4" style={{ fontFamily: "var(--font-sans)" }}>
          Hippocrate
        </p>
      </div>

      {/* ── NOS VINS ────────────────────────────────────────────────────────── */}
      <section id="vins" className="py-28 px-6" style={{ background: "#f5ede0" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#b84c2e] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "var(--font-sans)" }}>
              La Cave
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#2c1810] mb-5"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Nos Vins
            </h2>
            <div className="w-12 h-px bg-[#b84c2e] mx-auto mb-5" />
            <p className="text-[#5c4a3a] max-w-lg mx-auto text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
              Crus Classés de Provence — chaque cuvée est l&apos;expression sincère de notre terroir argilo-calcaire unique.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {wines.map((wine) => (
              <div
                key={wine.name}
                className="bg-white group cursor-pointer overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                style={{ boxShadow: "0 4px 24px rgba(44,24,16,0.07)" }}
              >
                <div className="h-1.5 w-full" style={{ background: wine.color }} />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p
                        className="text-[#b84c2e] text-xs tracking-widest uppercase mb-1"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {wine.type} · {wine.year}
                      </p>
                      <h3
                        className="text-2xl font-light text-[#2c1810]"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {wine.name}
                      </h3>
                    </div>
                    <div
                      className="w-10 h-10 rounded-full flex-shrink-0"
                      style={{ background: wine.color, opacity: 0.75 }}
                    />
                  </div>
                  <p className="text-[#8c7b6b] text-xs tracking-wider uppercase mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                    {wine.appellation}
                  </p>
                  <p className="text-[#5c4a3a] text-sm leading-relaxed mb-7" style={{ fontFamily: "var(--font-sans)" }}>
                    {wine.description}
                  </p>
                  <a
                    href="#boutique"
                    className="inline-flex items-center gap-3 text-xs tracking-widest uppercase text-[#b84c2e] border-b border-[#b84c2e] pb-0.5 hover:text-[#2c1810] hover:border-[#2c1810] transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Commander
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#boutique"
              className="inline-block px-10 py-4 text-white text-xs tracking-widest uppercase hover:opacity-90 transition-opacity"
              style={{ background: "#b84c2e", fontFamily: "var(--font-sans)" }}
            >
              Voir toute la gamme
            </a>
          </div>
        </div>
      </section>

      {/* ── VOUS RECEVOIR ────────────────────────────────────────────────────── */}
      <section id="recevoir" className="py-28 px-6" style={{ background: "#faf8f4" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#b84c2e] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "var(--font-sans)" }}>
              Séjourner & Déguster
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#2c1810] mb-5"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Vous recevoir
            </h2>
            <div className="w-12 h-px bg-[#b84c2e] mx-auto mb-5" />
            <p className="text-[#5c4a3a] max-w-lg mx-auto text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
              Hébergement, table d&apos;hôtes, dégustations, mariages, séminaires — mille façons de vivre Saint-Martin.
            </p>
          </div>

          {/* 4 tuiles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                label: "Hébergement",
                desc: "Chambres & suites dans la bastide",
                href: "#hebergement",
                img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
              },
              {
                label: "Table d'hôtes",
                desc: "Gastronomie provençale & accords mets-vins",
                href: "#restaurant",
                img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
              },
              {
                label: "Dégustations",
                desc: "Visites & ateliers au cœur du chai",
                href: "#evenements",
                img: "https://images.unsplash.com/photo-1474625342403-e7990c910e10?w=600&q=80",
              },
              {
                label: "Événements",
                desc: "Mariages, séminaires & privatisation",
                href: "#evenements",
                img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative overflow-hidden block"
                style={{ height: "280px" }}
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(44,24,16,0.75) 0%, rgba(44,24,16,0.1) 60%)" }}
                />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3
                    className="text-white text-xl font-light mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-white/70 text-xs" style={{ fontFamily: "var(--font-sans)" }}>
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Hébergement détail */}
          <div id="hebergement">
            <h3
              className="text-3xl font-light text-[#2c1810] mb-8 text-center"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Chambres & Suites
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {rooms.map((room) => (
                <div
                  key={room.name}
                  className="group overflow-hidden bg-white"
                  style={{ boxShadow: "0 4px 24px rgba(44,24,16,0.07)" }}
                >
                  <div className="overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      width={800}
                      height={256}
                      className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-light text-[#2c1810]" style={{ fontFamily: "var(--font-serif)" }}>
                        {room.name}
                      </h4>
                      <span className="text-xs text-[#8c7b6b]" style={{ fontFamily: "var(--font-sans)" }}>
                        {room.size}
                      </span>
                    </div>
                    <p className="text-[#5c4a3a] text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                      {room.description}
                    </p>
                    <ul className="flex flex-wrap gap-1.5 mb-5">
                      {room.features.map((f) => (
                        <li
                          key={f}
                          className="text-xs px-2 py-0.5 border text-[#8c7b6b]"
                          style={{ borderColor: "#d4b896", fontFamily: "var(--font-sans)" }}
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="text-xs tracking-widest uppercase text-[#b84c2e] border-b border-[#b84c2e] pb-0.5 hover:text-[#2c1810] hover:border-[#2c1810] transition-colors"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      Réserver
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESTAURANT ──────────────────────────────────────────────────────── */}
      <section
        id="restaurant"
        className="relative py-40 px-6"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(44,24,16,0.72)" }} />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-[#d4a882] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "var(--font-sans)" }}>
            Table d&apos;Hôtes
          </p>
          <h2
            className="text-white text-4xl md:text-5xl font-light mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Une cuisine du terroir
            <br />
            élevée au rang d&apos;art
          </h2>
          <div className="w-12 h-px bg-[#d4a882] mx-auto mb-8" />
          <p className="text-white/75 leading-relaxed mb-10 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
            Notre chef compose une carte inspirée des saisons et des producteurs locaux — herbes du jardin, agneau du Var, poissons de Méditerranée. Chaque plat trouve son accord parfait parmi nos cuvées.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            {[
              { label: "Déjeuner", time: "12h30 – 14h00" },
              { label: "Dîner", time: "19h30 – 21h30" },
              { label: "Menu dégustation", time: "dès 95€" },
            ].map(({ label, time }, i) => (
              <div key={label} className="flex sm:contents">
                {i > 0 && <div className="hidden sm:block w-px bg-white/20" />}
                <div className="text-center">
                  <p className="text-[#d4a882] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-sans)" }}>
                    {label}
                  </p>
                  <p className="text-white text-sm" style={{ fontFamily: "var(--font-sans)" }}>{time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACTUALITÉS ──────────────────────────────────────────────────────── */}
      <section id="actualites" className="py-28 px-6" style={{ background: "#f5ede0" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#b84c2e] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "var(--font-sans)" }}>
              Actualités
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#2c1810]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Dernières nouvelles
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item) => (
              <article
                key={item.title}
                className="bg-white group cursor-pointer overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                style={{ boxShadow: "0 4px 24px rgba(44,24,16,0.07)" }}
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={240}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[#b84c2e] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                    {item.date}
                  </p>
                  <h3
                    className="text-lg font-light text-[#2c1810] mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#5c4a3a] text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÉVÉNEMENTS ──────────────────────────────────────────────────────── */}
      <section id="evenements" className="py-28 px-6" style={{ background: "#faf8f4" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80"
              alt="Événements au Château"
              width={900}
              height={560}
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </div>
          <div>
            <p className="text-[#b84c2e] text-xs tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "var(--font-sans)" }}>
              Événements
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#2c1810] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Vivez des moments
              <br />
              d&apos;exception
            </h2>
            <div className="w-12 h-px bg-[#b84c2e] mb-8" />
            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Mariages",
                  desc: "Cérémonie en plein air face aux vignes, dîner de gala dans nos salles voûtées, nuit de noces en suite prestige.",
                },
                {
                  title: "Séminaires & Team Building",
                  desc: "Salles équipées, ateliers de vinification, dégustations privatisées — inspirez vos équipes dans un cadre d'exception.",
                },
                {
                  title: "Dégustations Privées",
                  desc: "Visite guidée du chai, rencontre avec notre maître de chai, dégustation verticale des grandes cuvées.",
                },
              ].map((ev) => (
                <div key={ev.title} className="flex gap-4">
                  <div className="w-1 flex-shrink-0 mt-1" style={{ background: "#b84c2e" }} />
                  <div>
                    <h3
                      className="text-lg font-light text-[#2c1810] mb-1"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {ev.title}
                    </h3>
                    <p className="text-[#5c4a3a] text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
                      {ev.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block mt-10 px-8 py-4 text-white text-xs tracking-widest uppercase hover:opacity-90 transition-opacity"
              style={{ background: "#b84c2e", fontFamily: "var(--font-sans)" }}
            >
              Demander un devis
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-28 px-6" style={{ background: "#2c1810" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <p className="text-[#d4a882] text-xs tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "var(--font-sans)" }}>
              Nous contacter
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-white mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Venez nous rendre visite
            </h2>
            <div className="w-12 h-px bg-[#d4a882] mb-10" />

            <div className="flex flex-col gap-7 mb-10">
              {[
                { label: "Adresse", value: `${siteConfig.contact.address}, ${siteConfig.contact.city}` },
                { label: "Téléphone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
                { label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <p className="text-[#d4a882] text-xs tracking-widest uppercase mb-1.5" style={{ fontFamily: "var(--font-sans)" }}>
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="text-white/70 hover:text-white transition-colors text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                      {value}
                    </a>
                  ) : (
                    <p className="text-white/70 text-sm" style={{ fontFamily: "var(--font-sans)" }}>{value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <p className="text-[#d4a882] text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                Horaires de la cave
              </p>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                {[
                  ["Lun – Ven", "9h00 – 18h00"],
                  ["Samedi", "10h00 – 17h00"],
                  ["Dimanche", "Sur réservation"],
                ].map(([day, hours]) => (
                  <div key={day} className="contents">
                    <span className="text-white/40" style={{ fontFamily: "var(--font-sans)" }}>{day}</span>
                    <span className="text-white/80" style={{ fontFamily: "var(--font-sans)" }}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer
        className="py-8 px-6 border-t"
        style={{ background: "#2c1810", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            © {new Date().getFullYear()} Château de Saint-Martin — Cru Classé de Provence — Tous droits réservés
          </p>
          <p
            className="text-[#d4a882]/60 text-xs"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            L&apos;abus d&apos;alcool est dangereux pour la santé — À consommer avec modération
          </p>
        </div>
      </footer>
    </>
  );
}
