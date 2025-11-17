import { ArrowRight, Map, Radar, FileText, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-200/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-200/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full bg-blue-600/10 text-blue-700 ring-1 ring-blue-600/20">
              <Sparkles size={14} /> AI + GeoAI FAA Drone Compliance Platform
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Making FAA drone compliance radically simpler, smarter, and location-aware.
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Turn regulatory friction into operational confidence with an intelligent, always-on compliance copilot. Built for service providers, enterprise fleets, and BVLOS/Part 108 teams.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-slate-900 text-white font-semibold hover:bg-slate-800">
                Get early access <ArrowRight size={18} />
              </a>
              <a href="#vision" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-slate-300 text-slate-800 font-semibold hover:bg-white">
                See how it works
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
              <div className="inline-flex items-center gap-2"><FileText size={16} /> Waiver drafts in minutes</div>
              <div className="inline-flex items-center gap-2"><Radar size={16} /> Smart validator</div>
              <div className="inline-flex items-center gap-2"><Map size={16} /> GeoAI risk scoring</div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl blur-2xl" />
              <div className="relative rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
                <div className="aspect-video rounded-lg bg-slate-900/95 text-slate-200 p-5 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-blue-300 font-mono">$ compliance simulate --site "BVLOS test corridor"</div>
                    <div className="mt-3 text-2xl font-semibold">Inspector Simulator</div>
                    <p className="mt-2 text-sm text-slate-300">Run “What if?” scenarios with inline FAA citations and recommended mitigations.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="rounded-md bg-blue-600/20 text-blue-100 px-2 py-1">Part 107</div>
                    <div className="rounded-md bg-emerald-600/20 text-emerald-100 px-2 py-1">BVLOS</div>
                    <div className="rounded-md bg-indigo-600/20 text-indigo-100 px-2 py-1">SOPs</div>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
                  <div className="rounded-lg border border-slate-200 p-3">
                    <div className="font-semibold">FAA RAG Chatbot</div>
                    <div className="text-slate-500">Answers with citations from official docs + your SOPs.</div>
                  </div>
                  <div className="rounded-lg border border-slate-200 p-3">
                    <div className="font-semibold">Waiver Generator</div>
                    <div className="text-slate-500">Auto-drafted and editable in minutes.</div>
                  </div>
                  <div className="rounded-lg border border-slate-200 p-3">
                    <div className="font-semibold">GeoAI Risk</div>
                    <div className="text-slate-500">Location-aware scoring for sites and corridors.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
