export default function Features() {
  const features = [
    {
      title: "Firm Assessment",
      text: "Evaluate marketing, operations, intake, client acquisition, financial visibility, systems, and growth readiness.",
    },
    {
      title: "AI Strategic Advisor",
      text: "Turn assessment results into practical recommendations, priorities, and next-step action plans.",
    },
    {
      title: "Executive Dashboard",
      text: "See opportunities, risks, initiatives, and performance indicators in one clear command center.",
    },
  ];

  return (
    <section id="features" className="bg-slate-50 px-6 py-20 text-slate-950">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Core Platform
        </p>

        <h2 className="mb-6 text-4xl font-bold">
          Built for the business side of law.
        </h2>

        <p className="mb-12 max-w-3xl text-lg leading-8 text-slate-600">
          Law Firm Navigator helps firm owners move from scattered decisions to
          a structured operating system for growth, accountability, and clarity.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="mb-4 text-2xl font-semibold">{feature.title}</h3>
              <p className="leading-7 text-slate-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}