import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Vous recevoir",
  description: "Caveau de dégustation ouvert toute l'année au Château de Saint-Martin — Taradeau, Provence.",
};

export default function VousRecevoirPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-end pb-16 pt-32"
        style={{
          background: "linear-gradient(to bottom, #1a0a10 0%, #2c1810 100%)",
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
            Vous recevoir
          </h1>
          <div className="section-divider" />
        </div>
      </section>

      {/* Caveau */}
      <section className="py-20 bg-[#faf8f4]">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Dégustation
            </p>
            <h2
              className="text-4xl text-[#1a0f0a] mb-6"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
            >
              Caveau de dégustation
            </h2>
            <p
              className="text-[#5c4a3a] leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem" }}
            >
              Nous vous attendons sur le domaine pour une belle dégustation des vins du Château.
              Notre caveau de dégustation est ouvert toute l&apos;année.
            </p>
            <p
              className="text-[#5c4a3a] leading-relaxed"
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem" }}
            >
              Retrouvez également les <strong>VinoSpirit Expériences</strong> sur le site tourisme du Château de Saint-Martin.
            </p>
          </div>

          {/* Horaires */}
          <div className="space-y-6">
            <div className="border border-[#e8d5a3] p-6">
              <p
                className="text-[#c8a96e] text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                1er Octobre → 30 Mars
              </p>
              <p
                className="text-[#1a0f0a] text-xl mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Lundi → Samedi
              </p>
              <p className="text-[#5c4a3a]" style={{ fontFamily: "var(--font-sans)" }}>
                10h – 13h &amp; 14h – 18h
              </p>
              <p className="text-[#8c7b6b] text-sm mt-2" style={{ fontFamily: "var(--font-sans)" }}>
                Fermé le dimanche (sauf événement)
              </p>
            </div>

            <div className="border border-[#e8d5a3] p-6">
              <p
                className="text-[#c8a96e] text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                1er Avril → 30 Septembre
              </p>
              <p
                className="text-[#1a0f0a] text-xl mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                7 jours sur 7
              </p>
              <p className="text-[#5c4a3a]" style={{ fontFamily: "var(--font-sans)" }}>
                10h – 13h &amp; 14h – 18h
              </p>
              <p className="text-[#8c7b6b] text-sm mt-2" style={{ fontFamily: "var(--font-sans)" }}>
                Jusqu&apos;à 19h du 1er juillet au 31 août
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comment venir */}
      <section className="py-16 bg-[#2c1810]">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-3xl text-center text-white mb-4"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            Comment nous trouver
          </h2>
          <div className="section-divider mb-10" />
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p
                className="text-[#c8a96e] text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Adresse
              </p>
              <p className="text-white text-lg" style={{ fontFamily: "var(--font-serif)" }}>
                {siteConfig.contact.address}
              </p>
              <p className="text-white/70" style={{ fontFamily: "var(--font-sans)" }}>
                {siteConfig.contact.city}
              </p>
              <p className="text-white/70 mt-2" style={{ fontFamily: "var(--font-sans)" }}>
                GPS : 43.4494445, 6.4429021
              </p>
            </div>
            <div>
              <p
                className="text-[#c8a96e] text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Accès
              </p>
              <ul className="space-y-2 text-white/70" style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem" }}>
                <li>Gare TGV Les Arcs-Draguignan — <strong className="text-white">10 min</strong></li>
                <li>Aéroport Nice Côte d&apos;Azur — <strong className="text-white">1h</strong></li>
                <li>Aéroport Marseille Provence — <strong className="text-white">1h30</strong></li>
                <li>Aéroport Toulon-Hyères — <strong className="text-white">1h</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#faf8f4] text-center">
        <p
          className="text-[#5c4a3a] text-lg mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Une question ? Contactez-nous.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-block border border-[#c8a96e] text-[#c8a96e] px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#c8a96e] hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {siteConfig.contact.phone}
          </a>
          <a
            href="/saint-martin/contact"
            className="inline-block bg-[#2c1810] text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#1a0f0a] transition-colors"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Nous écrire
          </a>
        </div>
      </section>

      <footer className="bg-[#1a0f0a] py-10 text-center">
        <p className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-sans)" }}>
          © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.contact.city}
        </p>
      </footer>
    </>
  );
}
