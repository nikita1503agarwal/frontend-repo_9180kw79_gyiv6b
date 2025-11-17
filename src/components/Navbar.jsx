import { Menu, Shield, Plane, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm">
              <Shield size={18} />
            </div>
            <span className="font-semibold tracking-tight text-slate-900">FAA AI + GeoAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#objectives" className="hover:text-slate-900">Objectives</a>
            <a href="#users" className="hover:text-slate-900">Ideal Users</a>
            <a href="#differentiators" className="hover:text-slate-900">Differentiators</a>
            <a href="#roadmap" className="hover:text-slate-900">Roadmap</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#cta" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Talk to us</a>
            <a href="#cta" className="inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-md bg-slate-900 text-white hover:bg-slate-800">
              <Sparkles size={16} /> Get early access
            </a>
          </div>
          <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-black/5">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
