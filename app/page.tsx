import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import GrowthCycle from "@/components/GrowthCycle";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <GrowthCycle />
      
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