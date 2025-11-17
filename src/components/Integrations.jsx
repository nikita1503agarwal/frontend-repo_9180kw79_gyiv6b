export default function Integrations() {
  const items = [
    "AirData – flight logs & maintenance",
    "DroneDeploy / DJI Dock / Skydio Dock",
    "Notion / Google Workspace",
    "Airspace APIs – LAANC, TFRs, weather",
    "Ollama / Azure AI – private engines"
  ];
  return (
    <section id="integrations" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Strategic Integrations</h2>
        <p className="mt-3 text-slate-600 max-w-3xl">Connect mission planning, airspace, and knowledge systems to keep operations synchronized.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((x) => (
            <div key={x} className="rounded-lg bg-white border border-slate-200 p-4 text-slate-800">{x}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
