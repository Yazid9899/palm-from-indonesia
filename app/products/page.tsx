import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTS_DATA } from "@/constants/data";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <section className="bg-[#f6f2ea]">
        <div className="relative h-56">
          <Image
            src="/productLineUp-bg.png"
            alt="Products"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101510]/80 via-[#101510]/50 to-transparent" />
          <div className="container-main relative z-10 flex h-full flex-col justify-end pb-10">
            <p className="eyebrow text-[#f8d9a6]">Catalog</p>
            <h1 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Explore our product range
            </h1>
          </div>
        </div>

        <div className="container-main section-pad">
          <div className="grid gap-8 md:grid-cols-2">
            {PRODUCTS_DATA.map((product) => (
              <article key={product.slug} className="soft-panel overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`/${product.slug}-banner.jpg`}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#8a7d6d]">
                    {product.slug}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-[#1f3a2a]">
                    {product.name}
                  </h2>
                  <p className="mt-3 text-sm text-[#6f6152]">
                    {product.title}
                  </p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-5 inline-flex items-center text-sm font-semibold text-[#1f3a2a]"
                  >
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
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
