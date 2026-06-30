export default function GrowthCycle() {
  const steps = [
    "Assess the firm",
    "Identify priorities",
    "Act with confidence",
    "Measure improvement",
  ];

  return (
    <section id="process" className="bg-white px-6 py-20 text-slate-950">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          How It Works
        </p>

        <h2 className="mb-12 text-4xl font-bold">
          The Law Firm Growth Cycle
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="rounded-xl border border-slate-200 p-6">
              <p className="mb-4 text-sm font-bold text-blue-600">
                Step {index + 1}
              </p>
              <h3 className="text-xl font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}