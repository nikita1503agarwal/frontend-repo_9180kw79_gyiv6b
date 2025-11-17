export default function Roadmap() {
  const phases = [
    {
      tag: "MVP (0.1)",
      title: "Waiver Copilot",
      time: "1–2 months",
      items: [
        "FAA RAG chatbot (Part 107 + FAA ACs)",
        "Part 108 BVLOS compliance report generator",
        "FAA template library & waiver search",
        "Upload org-specific docs/SOPs",
        "Export to Google Drive / Notion",
      ],
      done: true,
    },
    {
      tag: "V1.0",
      title: "The Compliance Toolkit",
      time: "3–4 months",
      items: [
        "Smart Validator (logs, checklists)",
        "Mission Profile Analyzer",
        "Inline FAA citation & sourcing",
        "Rule Change Tracker + impact alerts",
        "SOP Generator & template library",
        "Version control & expiry warnings",
      ],
    },
    {
      tag: "V1.5",
      title: "Enterprise-Ready",
      time: "5–6 months",
      items: [
        "RBAC",
        "Audit-ready export packages",
        "Airspace API integration for live checks",
        "FAA Inspector Simulator",
        "On-prem/self-hosted deployments",
      ],
    },
    {
      tag: "V2.0",
      title: "The Intelligent Compliance Platform",
      time: "6–9 months",
      items: [
        "GeoAI module: location-aware risk scoring",
        "Real-time site-specific alerts",
        "Flight log auto-ingestion from AirData",
        "Custom compliance APIs for OEMs & docks",
        "Knowledge graph of best practices",
        "Multilingual support",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Feature Roadmap</h2>
        <p className="mt-3 text-slate-600 max-w-3xl">From waiver automation to GeoAI-driven, predictive compliance.</p>
        <div className="mt-10 grid gap-6">
          {phases.map((p) => (
            <div key={p.tag} className="rounded-xl border border-slate-200 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-medium px-2 py-1 rounded-full bg-slate-900/5 text-slate-700 ring-1 ring-slate-900/10">{p.tag} • {p.time}</div>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{p.title}</h3>
                </div>
                {p.done && <span className="text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700 px-2 py-1">In progress</span>}
              </div>
              <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-slate-700 list-disc pl-5">
                {p.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
