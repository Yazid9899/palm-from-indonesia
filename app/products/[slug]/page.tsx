"use client";

import Navbar from "@/components/Navbar";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PRODUCTS_DATA } from "@/constants/data";
import Footer from "@/components/Footer";
import { ProductType } from "@/constants/type";

export default function Page() {
  const params = useParams<{ slug: string }>();
  const [product, setProduct] = useState<ProductType | undefined>(undefined);
  const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const slug = params?.slug ?? "";
    const newProduct = PRODUCTS_DATA.find((item) => item.slug === slug);
    setProduct(newProduct);
  }, [params?.slug]);

  if (!product) {
    return (
      <>
        <Navbar />
        <section className="section-pad">
          <div className="container-main">
            <p className="text-sm text-[#6f6152]">Product not found.</p>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const toggleDropdown = (index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <Navbar />
      <section className="bg-[#f6f2ea]">
        <div className="relative h-[360px]">
          <Image
            src={`/${product.slug}-banner.jpg`}
            alt={product.name}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101510]/80 via-[#101510]/50 to-transparent" />
          <div className="container-main relative z-10 flex h-full flex-col justify-end pb-10">
            <p className="eyebrow text-[#f8d9a6]">Product highlight</p>
            <h1 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              {product.title}
            </h1>
          </div>
        </div>

        <div className="container-main section-pad">
          <h2 className="display-2">{product.name}</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="lead">
                <span className="font-semibold text-[#b35f2a]">
                  {product.description1.split(" ").slice(0, 1).join(" ")}{" "}
                </span>
                {product.description1.split(" ").slice(1).join(" ")}
              </p>
              <p className="lead">{product.description2}</p>
            </div>
            <div className="rounded-3xl bg-white/70 p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8a7d6d]">
                Request a sample
              </p>
              <div className="mt-4 flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-[#f6f2ea]">
                <Image
                  src={`/${product.slug}-sample.png`}
                  alt={`${product.name} sample`}
                  width={260}
                  height={260}
                  className="h-full w-full object-contain object-center p-2"
                />
              </div>
              <button
                onClick={() => {
                  window.location.href = `/contact?message=Request%20sample%20for%20${product.title}`;
                }}
                className="btn-primary mt-5 w-full"
              >
                Request sample
              </button>
            </div>
          </div>

          <div className="mt-14">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#1f3a2a]">
                Product line up
              </h3>
              <span className="text-xs uppercase tracking-[0.3em] text-[#8a7d6d]">
                Variants
              </span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {product.derivative.map((item) => (
                <div
                  key={item.name}
                  className="relative h-48 overflow-hidden rounded-2xl"
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                  <p className="absolute bottom-3 left-4 text-sm font-semibold text-white">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {product.type.length > 0 && (
            <div className="mt-16">
              <h3 className="text-xl font-semibold text-[#1f3a2a]">
                Types and profiles
              </h3>
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                {product.type.map((type) => (
                  <div
                    key={type.name}
                    className="flex gap-4 rounded-2xl bg-white/70 p-4 shadow-sm"
                  >
                    <Image
                      src={type.imageSrc}
                      alt={type.name}
                      width={120}
                      height={120}
                      className="h-28 w-28 rounded-2xl object-cover"
                    />
                    <div>
                      <p className="text-base font-semibold text-[#1f3a2a]">
                        {type.name}
                      </p>
                      {type.origin && (
                        <p className="text-xs uppercase tracking-[0.2em] text-[#8a7d6d]">
                          Origin: {type.origin}
                        </p>
                      )}
                      <p className="mt-3 text-sm text-[#6f6152]">
                        {type.profile}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-[#1f3a2a] p-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-[#f8d9a6]">
                Specifications
              </p>
              <p className="mt-4 text-sm text-white/80">{product.greenBoxDesc}</p>
            </div>
            <div className="space-y-3">
              {product.spesification.map((spec, index) => (
                <div key={spec.name} className="rounded-2xl bg-white/80 shadow-sm">
                  <button
                    type="button"
                    onClick={() => toggleDropdown(index)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-[#1f3a2a]">
                      {spec.name}
                    </span>
                    <svg
                      className={`h-4 w-4 transition ${
                        openIndexes[index] ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#1f3a2a"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden px-5 text-sm text-[#6f6152] transition-all duration-300 ${
                      openIndexes[index]
                        ? "max-h-[420px] pb-4 opacity-100"
                        : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-2">
                      {spec.description.map((text) => (
                        <p key={text}>{text}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
