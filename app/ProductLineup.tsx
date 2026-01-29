import Image from "next/image";
import Link from "next/link";
import { PRODUCT_LINEUP } from "@/constants/data";

export default function ProductLineup() {
  return (
    <section className="section-pad">
      <div className="container-main">
        <div className="flex flex-col gap-4 text-center">
          <p className="eyebrow">Our products</p>
          <h2 className="display-2">Organic ingredients from trusted origins</h2>
          <p className="lead max-w-2xl mx-auto">
            Curated staples for culinary and commercial needs, sourced
            responsibly and prepared for export-ready consistency.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PRODUCT_LINEUP.map((product) => (
            <article
              key={product.id}
              className="soft-panel overflow-hidden group"
            >
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative h-56">
                  <Image
                    src={`/card-pict-${product.id}.jpg`}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <Image
                        src={product.iconSrc}
                        alt=""
                        width={32}
                        height={32}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#2b3328]">
                        {product.name}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#8a7d6d]">
                        {product.slug}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-[#3d352d]">
                    {product.derivative}
                  </p>
                  <span className="mt-6 inline-flex items-center text-sm font-semibold text-[#1f3a2a]">
                    View details
                    <svg
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L13 6M19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
