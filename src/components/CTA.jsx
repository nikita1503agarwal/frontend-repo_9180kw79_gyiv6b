export default function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40" style={{background:"radial-gradient(800px 300px at 80% 20%, rgba(99,102,241,0.5), transparent), radial-gradient(600px 300px at 20% 80%, rgba(56,189,248,0.5), transparent)"}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Be first to the future of drone compliance</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">Join the early access program for waiver automation, inspector simulations, and GeoAI risk scoring. We'll onboard a small cohort of teams.</p>
          </div>
          <div className="lg:col-span-5">
            <form onSubmit={(e)=>e.preventDefault()} className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="Work email" className="flex-1 px-3 py-2 rounded-md bg-white text-slate-900 placeholder-slate-500" />
              <button className="px-4 py-2 rounded-md bg-white text-slate-900 font-semibold hover:bg-slate-100">Request access</button>
            </form>
            <p className="mt-3 text-sm text-slate-400">By requesting access you agree to be contacted about pilots and updates.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
