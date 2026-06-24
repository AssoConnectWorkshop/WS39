import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez le Château de Saint-Martin — 614 Route des Arcs, 83460 Taradeau, Provence.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section
        className="relative min-h-[40vh] flex items-end pb-16 pt-32"
        style={{
          background: "linear-gradient(to bottom, #1a0f0a 0%, #2c1810 100%)",
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
            Contact &amp; infos pratiques
          </h1>
          <div className="section-divider" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-[#faf8f4] text-center">
        <p
          className="text-[#5c4a3a] text-lg max-w-2xl mx-auto px-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Le Château de Saint-Martin est un des rares Crûs Classés situé en plein cœur de la Provence,
          à 30 kilomètres de la Côte d&apos;Azur.
        </p>
      </section>

      {/* Grid infos + form */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Infos */}
          <div className="space-y-8">
            <div>
              <p
                className="text-[#c8a96e] text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Adresse
              </p>
              <p className="text-[#1a0f0a] text-lg" style={{ fontFamily: "var(--font-serif)" }}>
                {siteConfig.contact.address}
              </p>
              <p className="text-[#5c4a3a]" style={{ fontFamily: "var(--font-sans)" }}>
                {siteConfig.contact.city}
              </p>
            </div>

            <div>
              <p
                className="text-[#c8a96e] text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Téléphone & Fax
              </p>
              <p className="text-[#5c4a3a]" style={{ fontFamily: "var(--font-sans)" }}>
                Tél. {siteConfig.contact.phone}
              </p>
              <p className="text-[#5c4a3a]" style={{ fontFamily: "var(--font-sans)" }}>
                Fax. {siteConfig.contact.fax}
              </p>
            </div>

            <div>
              <p
                className="text-[#c8a96e] text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Email
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[#5c4a3a] hover:text-[#c8a96e] transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {siteConfig.contact.email}
              </a>
            </div>

            <div>
              <p
                className="text-[#c8a96e] text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                GPS
              </p>
              <p className="text-[#5c4a3a] text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                43.4494445, 6.4429021
              </p>
            </div>

            <div>
              <p
                className="text-[#c8a96e] text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Accès
              </p>
              <ul className="space-y-1 text-[#5c4a3a] text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                <li>Gare TGV Les Arcs-Draguignan — <strong>10 min</strong></li>
                <li>Aéroport Nice Côte d&apos;Azur — <strong>1h</strong></li>
                <li>Aéroport Marseille Provence — <strong>1h30</strong></li>
                <li>Aéroport Toulon-Hyères — <strong>1h</strong></li>
              </ul>
            </div>

            <div>
              <p
                className="text-[#c8a96e] text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Horaires caveau
              </p>
              <div className="text-[#5c4a3a] text-sm space-y-2" style={{ fontFamily: "var(--font-sans)" }}>
                <p><strong>Oct – Mars :</strong> lun–sam 10h–13h et 14h–18h</p>
                <p><strong>Avr – Sep :</strong> 7j/7 10h–13h et 14h–18h</p>
                <p className="text-[#8c7b6b]">Juillet–août : jusqu&apos;à 19h</p>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p
                className="text-[#c8a96e] text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Réseaux sociaux
              </p>
              <div className="flex gap-4">
                {[
                  { label: "Facebook", url: siteConfig.social.facebook },
                  { label: "Instagram", url: siteConfig.social.instagram },
                  { label: "YouTube", url: siteConfig.social.youtube },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5c4a3a] hover:text-[#c8a96e] text-xs tracking-widest uppercase transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2
              className="text-2xl text-[#1a0f0a] mb-6"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
            >
              Envoyer un message
            </h2>
            <ContactForm />
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
