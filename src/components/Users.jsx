export default function Users() {
  const items = [
    "Drone Service Providers (DSPs)",
    "Enterprise Drone Programs (AEC, utilities, public safety)",
    "BVLOS & Part 108 R&D Teams",
    "Part 107 Pilots & Ops Managers",
    "Legal/Compliance Officers",
    "OEMs / Docking Stations"
  ];
  return (
    <section id="users" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Ideal Users</h2>
        <p className="mt-3 text-slate-600 max-w-3xl">Designed for teams that need reliable, audit-ready compliance across operations of any scale.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((x) => (
            <div key={x} className="rounded-lg bg-white border border-slate-200 p-4 text-slate-800">{x}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
