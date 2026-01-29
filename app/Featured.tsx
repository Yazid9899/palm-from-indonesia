import Image from "next/image";

const HIGHLIGHTS = [
  {
    title: "Reliable producer network",
    body: "Long-term partnerships with farmers and co-ops focused on quality and traceability.",
  },
  {
    title: "Transparent pricing",
    body: "Fair trade practices that support community development and sustainable supply.",
  },
  {
    title: "Capacity planning",
    body: "Flexible volumes and packaging options to fit retail or industrial needs.",
  },
];

export default function Featured() {
  return (
    <section className="section-pad">
      <div className="container-main grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/features-1.png"
            alt="Fair trade and community support"
            width={520}
            height={560}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="eyebrow">Fair trade and impact</p>
          <h2 className="display-2 mt-3">
            Trusted sourcing with a community-first approach
          </h2>
          <p className="lead mt-6">
            Fair trade is more than a label. We collaborate with producers and
            growers so they can access training, healthcare, and better income
            stability while delivering consistent quality to global buyers.
          </p>
          <div className="mt-8 grid gap-4">
            {HIGHLIGHTS.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white/80 p-5 shadow-sm">
                <p className="text-sm font-semibold text-[#1f3a2a]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-[#6f6152]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-main mt-16">
        <div className="grid grid-cols-2 gap-6 rounded-3xl border border-[#1f3a2a]/10 bg-white/80 p-6 md:grid-cols-4">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="flex items-center justify-center">
              <Image
                src={`/certificate-${id}.jpg`}
                alt={`Certification ${id}`}
                width={120}
                height={120}
                className="h-20 w-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
