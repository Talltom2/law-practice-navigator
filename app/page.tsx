export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-xl font-bold tracking-tight">
            Law Firm Navigator
          </div>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#process" className="hover:text-white">How It Works</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold hover:bg-blue-400"
          >
            Request Demo
          </a>
        </div>
      </nav>

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

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Most small firms are missing a strategic operating system.
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Attorneys are trained to practice law, not necessarily to run a
            growing business. Law Firm Navigator gives firm owners a structured
            way to evaluate performance, prioritize improvements, and make
            better decisions.
          </p>
        </div>
      </section>

      <section id="features" className="bg-slate-50 px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-bold">
            Built for the business side of law.
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              title="Firm Assessment"
              text="Evaluate marketing, operations, client acquisition, financial visibility, systems, and growth readiness."
            />
            <FeatureCard
              title="AI Strategic Advisor"
              text="Turn assessment results into practical recommendations, priorities, and next-step action plans."
            />
            <FeatureCard
              title="Executive Dashboard"
              text="See opportunities, risks, initiatives, and performance indicators in one clear command center."
            />
          </div>
        </div>
      </section>

      <section id="process" className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-bold">
            The Law Firm Growth Cycle
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              "Assess the firm",
              "Identify priorities",
              "Act with confidence",
              "Measure improvement",
            ].map((step, index) => (
              <div key={step} className="rounded-xl border p-6">
                <p className="mb-4 text-sm font-bold text-blue-600">
                  Step {index + 1}
                </p>
                <h3 className="text-xl font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-slate-100 px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-4xl font-bold">Simple early pricing.</h2>
          <p className="mb-10 text-slate-600">
            Final pricing will be refined with early users.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <PricingCard title="Starter" price="$99/mo" />
            <PricingCard title="Professional" price="$199/mo" featured />
            <PricingCard title="Growth" price="$399/mo" />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to build a better law firm?
          </h2>
          <p className="mb-8 text-lg text-slate-300">
            Law Firm Navigator is currently in early development. Join the
            early access list to help shape the first release.
          </p>
          <a
            href="mailto:info@lawfirmnavigator.com"
            className="inline-block rounded-lg bg-blue-500 px-8 py-4 font-semibold hover:bg-blue-400"
          >
            Request Early Access
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Law Firm Navigator. Built for small law firms ready to grow with clarity.
      </footer>
    </main>
  );
}

function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function PricingCard({
  title,
  price,
  featured = false,
}: {
  title: string;
  price: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-8 shadow-sm ${
        featured ? "border-blue-500 bg-white" : "border-slate-200 bg-white"
      }`}
    >
      {featured && (
        <p className="mb-4 text-sm font-bold uppercase tracking-wide text-blue-600">
          Recommended
        </p>
      )}
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      <p className="mb-6 text-4xl font-bold">{price}</p>
      <p className="text-slate-600">
        Early access package for small firms seeking better strategic direction.
      </p>
    </div>
  );
}