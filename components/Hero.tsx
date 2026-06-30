export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
      <div>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          AI-powered growth strategy
        </p>

        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          Stop running your law firm on instinct.
        </h1>

        <p className="mb-8 text-xl leading-8 text-slate-300">
          Law Firm Navigator helps solo attorneys and small law firms make
          better business decisions with structured assessments, strategic
          recommendations, and executive-level visibility.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-lg bg-blue-500 px-6 py-3 text-center font-semibold hover:bg-blue-400"
          >
            Request Early Access
          </a>
          <a
            href="#features"
            className="rounded-lg border border-slate-600 px-6 py-3 text-center font-semibold text-slate-200 hover:bg-slate-800"
          >
            Explore Features
          </a>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-sm text-slate-400">Firm Health Score</p>
            <p className="text-4xl font-bold">82%</p>
          </div>
          <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-300">
            Improving
          </span>
        </div>

        <div className="space-y-4">
          {[
            ["Client Acquisition", "Strong"],
            ["Marketing Consistency", "Needs Focus"],
            ["Operational Systems", "Developing"],
            ["Financial Visibility", "Moderate"],
            ["Strategic Planning", "High Priority"],
          ].map(([label, status]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-lg bg-slate-900 px-4 py-3"
            >
              <span className="text-slate-300">{label}</span>
              <span className="text-sm font-semibold text-blue-300">
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}