export default function Objectives() {
  const items = [
    {
      title: "Simplify FAA compliance",
      desc: "Translate regulations into actionable answers and usable templates.",
    },
    {
      title: "Accelerate waiver writing",
      desc: "Auto-generate compliant, editable documents and SOPs in minutes.",
    },
    {
      title: "Prevent mistakes",
      desc: "Proactively flag risks, missing data, or non-compliance in plans/logs.",
    },
    {
      title: "Make compliance scalable",
      desc: "Maintain consistent, audit-ready processes across growing teams.",
    },
    {
      title: "Add location intelligence",
      desc: "Evaluate risk at specific sites, corridors, and missions with GeoAI.",
    },
    {
      title: "Keep knowledge fresh",
      desc: "Stay current with FAA and jurisdiction rule changes and best practices.",
    },
  ];

  return (
    <section id="objectives" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Core Product Objectives</h2>
        <p className="mt-3 text-slate-600 max-w-3xl">The platform converts complex FAA regulations into clear, operational workflows — reducing risk while speeding up approvals.</p>

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
