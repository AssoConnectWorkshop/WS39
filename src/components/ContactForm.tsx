"use client";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid sm:grid-cols-2 gap-5">
        {[
          { label: "Prénom", name: "firstName", type: "text" },
          { label: "Nom", name: "lastName", type: "text" },
        ].map(({ label, name, type }) => (
          <div key={name} className="flex flex-col gap-2">
            <label
              className="text-[#c8a96e] text-xs tracking-widest uppercase"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {label}
            </label>
            <input
              type={type}
              name={name}
              className="bg-transparent border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c8a96e] transition-colors"
              style={{ fontFamily: "var(--font-sans)" }}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <label
          className="text-[#c8a96e] text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Email
        </label>
        <input
          type="email"
          className="bg-transparent border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c8a96e] transition-colors"
          style={{ fontFamily: "var(--font-sans)" }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          className="text-[#c8a96e] text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Objet
        </label>
        <select
          className="bg-[#1a0f0a] border border-white/20 text-white/70 px-4 py-3 text-sm focus:outline-none focus:border-[#c8a96e] transition-colors"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <option>Réservation hébergement</option>
          <option>Réservation restaurant</option>
          <option>Commande de vins</option>
          <option>Événement / Mariage</option>
          <option>Séminaire</option>
          <option>Autre demande</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label
          className="text-[#c8a96e] text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Message
        </label>
        <textarea
          rows={4}
          className="bg-transparent border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c8a96e] transition-colors resize-none"
          style={{ fontFamily: "var(--font-sans)" }}
        />
      </div>
      <button
        type="submit"
        className="mt-2 px-8 py-4 bg-[#c8a96e] text-[#1a0f0a] text-xs tracking-widest uppercase hover:bg-[#e8d5a3] transition-colors duration-300 font-medium"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        Envoyer la demande
      </button>
    </form>
  );
}
