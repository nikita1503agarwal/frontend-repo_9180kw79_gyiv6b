export default function Differentiators() {
  const items = [
    { title: "FAA RAG Chatbot", desc: "Answers with citations from official FAA docs + your SOPs." },
    { title: "Auto-Generated Waivers & SOPs", desc: "Drafted for your drones, missions, and locations." },
    { title: "Smart Validator", desc: "Flags compliance gaps in logs, checklists, and flight plans." },
    { title: "Compliance Simulation", desc: "Run 'What if?' scenarios or inspector role-plays." },
    { title: "GeoAI Risk Scoring", desc: "Predicts compliance risk by site, path, and environment." },
    { title: "Built-In Change Monitoring", desc: "Tracks FAA updates and suggests fixes." },
  ];
  return (
    <section id="differentiators" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Why We're Different</h2>
        <p className="mt-3 text-slate-600 max-w-3xl">Purpose-built for drone compliance: precise, sourced, and tailored to your operations.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-slate-200 p-5 hover:shadow-sm transition-shadow">
              <div className="font-semibold text-slate-900">{it.title}</div>
              <div className="mt-2 text-slate-600 text-sm leading-relaxed">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
