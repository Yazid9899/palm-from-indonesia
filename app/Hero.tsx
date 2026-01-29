import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-surface">
      <div className="container-main section-pad hero-grid md:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col justify-center gap-6">
          <span className="pill w-fit">Palm From Indonesia</span>
          <h1 className="display-1">
            Premium agricultural exports sourced with care.
          </h1>
          <p className="lead max-w-xl">
            We partner with trusted farmers and co-ops to deliver vanilla, palm
            sugar, and coconut derivatives with consistent quality, full
            traceability, and export-ready handling.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products/vanilla" className="btn-primary">
              Explore products
            </Link>
            <Link href="/contact" className="btn-ghost">
              Request a quote
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Quality checked", value: "Every shipment" },
              { label: "Flexible volumes", value: "Small to bulk" },
              { label: "Global logistics", value: "Sea and air" },
            ].map((stat) => (
              <div key={stat.label} className="stat-card">
                <p className="text-sm font-semibold text-[#1f3a2a]">
                  {stat.label}
                </p>
                <p className="text-xs text-[#6f6152]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-card p-6 md:p-8">
          <div className="grid gap-4">
            <div className="relative h-44 overflow-hidden rounded-2xl">
              <Image
                src="/vanilla-banner.jpg"
                alt="Vanilla beans"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-36 overflow-hidden rounded-2xl">
                <Image
                  src="/card-pict-2.jpg"
                  alt="Coconut derivative"
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-36 overflow-hidden rounded-2xl">
                <Image
                  src="/card-pict-3.jpg"
                  alt="Palm sugar"
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl bg-[#1f3a2a] px-5 py-4 text-white">
              <p className="text-xs uppercase tracking-[0.25em] text-[#f8d9a6]">
                Trusted sourcing
              </p>
              <p className="mt-2 text-sm">
                Certified supply partners and meticulous handling for every
                export batch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
