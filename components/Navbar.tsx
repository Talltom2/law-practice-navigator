export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="text-xl font-bold tracking-tight text-white">
          Law Firm Navigator
        </div>

        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#features" className="hover:text-white">
            Features
          </a>

          <a href="#process" className="hover:text-white">
            How It Works
          </a>

          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-500"
        >
          Request Demo
        </a>

      </div>
    </nav>
  );
}