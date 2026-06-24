import Image from "next/image";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

const wines = [
  {
    name: "Clos de la Ponche",
    type: "Rosé",
    appellation: "Côtes de Provence",
    description:
      "Élégant et fruité, ce rosé exprime toute la finesse de la Provence avec des notes de fraise, de pêche blanche et une touche florale. Idéal en apéritif ou sur des grillades.",
    year: "2023",
    color: "#e8b4a0",
  },
  {
    name: "La Haute Fleur",
    type: "Rouge",
    appellation: "Côtes de Provence",
    description:
      "Un rouge charpenté et élégant, issu de Grenache, Syrah et Mourvèdre. Notes de fruits noirs, de garrigue et d'épices douces. Parfait avec des viandes rôties ou des fromages affinés.",
    year: "2021",
    color: "#6b1c1c",
  },
  {
    name: "Blanc de Blancs",
    type: "Blanc",
    appellation: "Côtes de Provence",
    description:
      "Fraîcheur et minéralité au rendez-vous dans ce blanc d'exception. Assemblage de Rolle et de Sémillon aux arômes d'agrumes, de fleurs blanches et d'amande.",
    year: "2023",
    color: "#d4c99a",
  },
];

const rooms = [
  {
    name: "Suite Lavande",
    size: "65 m²",
    description:
      "Terrasse privative avec vue sur les vignes, bain à remous, décoration provençale raffinée. Un havre de paix au cœur du domaine.",
    features: ["Vue vignes", "Terrasse privée", "Bain à remous", "Petit-déjeuner inclus"],
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  },
  {
    name: "Chambre Olivier",
    size: "40 m²",
    description:
      "Chambre lumineuse ouvrant sur le parc centenaire, mobilier en bois d'olivier, atmosphère douce et apaisante.",
    features: ["Vue parc", "Mobilier artisanal", "Climatisation", "Petit-déjeuner inclus"],
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
  },
  {
    name: "Suite Prestige",
    size: "90 m²",
    description:
      "Notre suite la plus somptueuse : salon privatif, cheminée, terrasse panoramique sur la forêt de Provence et les reliefs du Var.",
    features: ["Vue panoramique", "Salon privatif", "Cheminée", "Service en chambre"],
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
  },
];

const events = [
  {
    title: "Mariages",
    icon: "◇",
    description:
      "Célébrez votre union dans un cadre d'exception. Nos équipes orchestrent chaque détail pour un jour inoubliable, de la cérémonie au dîner de gala.",
  },
  {
    title: "Séminaires",
    icon: "◈",
    description:
      "Salles équipées, cadre inspirant, cuisine gastronomique. Le Château accueille vos événements professionnels avec soin et discrétion.",
  },
  {
    title: "Dégustations privées",
    icon: "◉",
    description:
      "Vivez une expérience unique au cœur du chai : visite des vignes, découverte du travail vigneron, dégustation guidée par notre sommelier.",
  },
];

export default function Home() {
  return (
    <>
      <Navigation />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1920&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(26,15,10,0.55) 0%, rgba(26,15,10,0.3) 50%, rgba(26,15,10,0.7) 100%)" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p
            className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Côtes de Provence · Depuis 1850
          </p>
          <h1
            className="text-white text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Château de
            <br />
            Saint-Martin
          </h1>
          <div className="section-divider mb-8" />
          <p
            className="text-white/80 text-lg md:text-xl font-light max-w-xl mx-auto mb-12 leading-relaxed"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Un domaine viticole d&apos;exception au cœur de la Provence, alliant tradition séculaire et art de vivre contemporain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#vins"
              className="px-8 py-3 text-xs tracking-widest uppercase border border-[#c8a96e] text-[#c8a96e] hover:bg-[#c8a96e] hover:text-[#1a0f0a] transition-all duration-300"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Découvrir les vins
            </a>
            <a
              href="#hebergement"
              className="px-8 py-3 text-xs tracking-widest uppercase bg-[#c8a96e] text-[#1a0f0a] hover:bg-[#e8d5a3] transition-all duration-300"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Séjourner au château
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-sans)" }}>
            Découvrir
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* LE DOMAINE */}
      <section id="domaine" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-sans)" }}>
              Le Domaine
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#1a0f0a] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Une histoire de passion
              <br />
              et de terroir
            </h2>
            <div className="section-divider mb-8" style={{ margin: "0 0 2rem 0" }} />
            <p className="text-[#8c7b6b] leading-relaxed mb-6" style={{ fontFamily: "var(--font-sans)" }}>
              Niché dans le cœur du Var, entre Tourtour et les Gorges du Verdon, le Château de Saint-Martin s&apos;étend sur 85 hectares de vignes, d&apos;oliviers et de forêts de chênes. Fondé en 1850 par la famille de Villeneuve, le domaine est aujourd&apos;hui un symbole de l&apos;excellence provençale.
            </p>
            <p className="text-[#8c7b6b] leading-relaxed mb-10" style={{ fontFamily: "var(--font-sans)" }}>
              Cinq générations se sont succédé pour façonner ce terroir unique, associant techniques traditionnelles et viticulture raisonnée. Le résultat : des vins d&apos;une rare élégance qui expriment avec sincérité le caractère de la Provence.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: "85", label: "Hectares de vignes" },
                { value: "5", label: "Générations" },
                { value: "1850", label: "Fondé en" },
              ].map(({ value, label }) => (
                <div key={label} className="border-l-2 border-[#c8a96e] pl-4">
                  <div
                    className="text-3xl text-[#6b1c1c] font-light mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
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
              src="https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80"
              alt="Le Château de Saint-Martin"
              width={800}
              height={540}
              className="w-full h-96 lg:h-[540px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 hidden lg:block overflow-hidden" style={{ border: "4px solid var(--color-background)" }}>
              <Image
                src="https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=400&q=80"
                alt="Vignes provençales"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BANDE DORÉE */}
      <div
        className="py-12 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #1a0f0a 0%, #3d1f1f 100%)" }}
      >
        <p
          className="text-[#c8a96e] text-sm md:text-base tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
        >
          &ldquo; Le vin est la lumière du soleil, tenue ensemble par l&apos;eau &rdquo; — Galilée
        </p>
      </div>

      {/* LES VINS */}
      <section id="vins" className="py-32 px-6" style={{ background: "#f4f0ea" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-sans)" }}>
              Notre Cave
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#1a0f0a] mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Les Vins du Château
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-[#8c7b6b] max-w-xl mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
              Rosé, rouge, blanc — chaque cuvée raconte une parcelle, une saison, un savoir-faire transmis de génération en génération.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {wines.map((wine) => (
              <div
                key={wine.name}
                className="bg-white group cursor-pointer overflow-hidden"
                style={{ boxShadow: "0 2px 20px rgba(26,15,10,0.06)" }}
              >
                <div
                  className="h-2 w-full"
                  style={{ background: wine.color }}
                />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p
                        className="text-xs tracking-widest uppercase text-[#8c7b6b] mb-1"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {wine.type} · {wine.year}
                      </p>
                      <h3
                        className="text-2xl font-light text-[#1a0f0a]"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {wine.name}
                      </h3>
                    </div>
                    <div
                      className="w-10 h-10 rounded-full flex-shrink-0 mt-1"
                      style={{ background: wine.color, opacity: 0.7 }}
                    />
                  </div>
                  <p
                    className="text-[#8c7b6b] text-xs tracking-wider uppercase mb-4"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {wine.appellation}
                  </p>
                  <p className="text-[#5c4a3a] leading-relaxed text-sm mb-6" style={{ fontFamily: "var(--font-sans)" }}>
                    {wine.description}
                  </p>
                  <a
                    href="#contact"
                    className="text-xs tracking-widest uppercase text-[#c8a96e] border-b border-[#c8a96e] pb-0.5 hover:text-[#6b1c1c] hover:border-[#6b1c1c] transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Commander
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HÉBERGEMENT */}
      <section id="hebergement" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-sans)" }}>
              Séjourner
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#1a0f0a] mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Hébergement & Suites
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-[#8c7b6b] max-w-xl mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
              Séjournez au cœur du vignoble dans nos chambres et suites, où chaque détail a été pensé pour votre confort et votre bien-être.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div key={room.name} className="group overflow-hidden" style={{ boxShadow: "0 2px 20px rgba(26,15,10,0.08)" }}>
                <div className="overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    width={800}
                    height={256}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="flex justify-between items-start mb-3">
                    <h3
                      className="text-xl font-light text-[#1a0f0a]"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {room.name}
                    </h3>
                    <span
                      className="text-xs text-[#8c7b6b] tracking-wide"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {room.size}
                    </span>
                  </div>
                  <p className="text-[#5c4a3a] text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                    {room.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-5">
                    {room.features.map((f) => (
                      <li
                        key={f}
                        className="text-xs px-2 py-0.5 border border-[#e8d5a3] text-[#8c7b6b] tracking-wide"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="text-xs tracking-widest uppercase text-[#c8a96e] border-b border-[#c8a96e] pb-0.5 hover:text-[#6b1c1c] hover:border-[#6b1c1c] transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Réserver
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESTAURANT — plein écran */}
      <section
        id="restaurant"
        className="relative py-40 px-6 flex items-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(26,15,10,0.72)" }} />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p
            className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Table Gastronomique
          </p>
          <h2
            className="text-white text-4xl md:text-5xl font-light mb-6 leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Une cuisine du terroir
            <br />
            élevée au rang d&apos;art
          </h2>
          <div className="section-divider mb-8" />
          <p
            className="text-white/75 leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Notre chef étoilé, Marc Fabre, compose une carte inspirée des saisons et des producteurs locaux. Herbes du jardin, légumes du potager, agneau du Var — une gastronomie sincère sublimée par nos cuvées.
          </p>
          <p
            className="text-white/75 leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Déjeuner en terrasse face aux vignes, dîner aux chandelles dans la salle voûtée du XVIIIe siècle — chaque repas est une expérience mémorable.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="text-center">
              <p className="text-[#c8a96e] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-sans)" }}>Déjeuner</p>
              <p className="text-white text-sm" style={{ fontFamily: "var(--font-sans)" }}>12h30 – 14h00</p>
            </div>
            <div className="hidden sm:block w-px bg-white/20" />
            <div className="text-center">
              <p className="text-[#c8a96e] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-sans)" }}>Dîner</p>
              <p className="text-white text-sm" style={{ fontFamily: "var(--font-sans)" }}>19h30 – 21h30</p>
            </div>
            <div className="hidden sm:block w-px bg-white/20" />
            <div className="text-center">
              <p className="text-[#c8a96e] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-sans)" }}>Menu dégustation</p>
              <p className="text-white text-sm" style={{ fontFamily: "var(--font-sans)" }}>à partir de 95€</p>
            </div>
          </div>
        </div>
      </section>

      {/* ÉVÉNEMENTS */}
      <section id="evenements" className="py-32 px-6" style={{ background: "#f4f0ea" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-sans)" }}>
              Événements
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-[#1a0f0a] mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Vivez des moments
              <br />
              d&apos;exception
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-[#8c7b6b] max-w-xl mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
              Du mariage intime au séminaire de prestige, le Château met son cadre et ses équipes à votre service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.title}
                className="bg-white p-10 text-center"
                style={{ boxShadow: "0 2px 20px rgba(26,15,10,0.06)" }}
              >
                <div
                  className="text-[#c8a96e] text-3xl mb-6"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {event.icon}
                </div>
                <h3
                  className="text-xl font-light text-[#1a0f0a] mb-4"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {event.title}
                </h3>
                <p className="text-[#8c7b6b] text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
                  {event.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block px-10 py-4 bg-[#6b1c1c] text-white text-xs tracking-widest uppercase hover:bg-[#3d0f0f] transition-colors duration-300"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Demander un devis
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6" style={{ background: "#1a0f0a" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <p className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-sans)" }}>
              Nous rejoindre
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-white mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Contact & Accès
            </h2>
            <div className="section-divider mb-10" style={{ margin: "0 0 2.5rem 0" }} />

            <div className="flex flex-col gap-6 mb-10">
              <div>
                <p className="text-[#c8a96e] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                  Adresse
                </p>
                <p className="text-white/70" style={{ fontFamily: "var(--font-sans)" }}>
                  {siteConfig.contact.address}
                </p>
              </div>
              <div>
                <p className="text-[#c8a96e] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                  Téléphone
                </p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div>
                <p className="text-[#c8a96e] text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-[#c8a96e] text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                Horaires de la cave
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  ["Lun – Ven", "9h00 – 18h00"],
                  ["Samedi", "10h00 – 17h00"],
                  ["Dimanche", "Sur réservation"],
                ].map(([day, hours]) => (
                  <div key={day} className="contents">
                    <span className="text-white/50" style={{ fontFamily: "var(--font-sans)" }}>{day}</span>
                    <span className="text-white/80" style={{ fontFamily: "var(--font-sans)" }}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-10 px-6 border-t"
        style={{ background: "#1a0f0a", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-white/40 text-xs"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            © {new Date().getFullYear()} Château de Saint-Martin — Tous droits réservés
          </p>
          <p
            className="text-[#c8a96e] text-xs tracking-widest uppercase"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
          >
            L&apos;abus d&apos;alcool est dangereux pour la santé — À consommer avec modération
          </p>
        </div>
      </footer>
    </>
  );
}
