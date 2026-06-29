export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Law Firm Navigator
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Strategic guidance for small law firms.
          </h1>

          <p className="mb-8 text-xl leading-8 text-slate-300">
            Law Firm Navigator helps solo attorneys and small law firms make
            better business decisions with AI-powered assessments, growth
            planning, competitive insight, and practical recommendations.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#early-access"
              className="rounded-lg bg-blue-500 px-6 py-3 text-center font-semibold text-white hover:bg-blue-400"
            >
              Request Early Access
            </a>
            <a
              href="#features"
              className="rounded-lg border border-slate-600 px-6 py-3 text-center font-semibold text-slate-200 hover:bg-slate-800"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-4xl font-bold">
            Built for firms that need clarity.
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">Firm Assessment</h3>
              <p className="text-slate-600">
                Evaluate your current position across marketing, operations,
                client acquisition, financial health, and competitive strength.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                AI Recommendations
              </h3>
              <p className="text-slate-600">
                Receive practical next-step guidance designed specifically for
                solo attorneys and small law firms.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                Growth Dashboard
              </h3>
              <p className="text-slate-600">
                Track priorities, opportunities, risks, and firm growth
                initiatives from one simple dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Stop guessing. Start navigating.
          </h2>
          <p className="mb-8 text-lg text-slate-600">
            Most small firms are overloaded with client work and under-equipped
            for strategic planning. Law Firm Navigator gives firm owners a
            structured way to identify what matters next.
          </p>
        </div>
      </section>

      <section id="early-access" className="bg-slate-950 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Early access is coming soon.
          </h2>
          <p className="mb-8 text-lg text-slate-300">
            We are building the first version now. Early users will help shape
            the assessment, dashboard, and recommendation engine.
          </p>
          <a
            href="mailto:info@lawfirmnavigator.com"
            className="inline-block rounded-lg bg-blue-500 px-8 py-4 font-semibold text-white hover:bg-blue-400"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}