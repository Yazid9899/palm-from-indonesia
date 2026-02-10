"use client";

import Image from "next/image";
import { useState } from "react";
import { FOUNDERS, VALUES } from "@/constants/data";

export default function AboutUs() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="aboutUs" className="section-pad">
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">About us</p>
            <h2 className="display-2 mt-3">Rooted in Indonesia, built for global supply</h2>
            <p className="lead mt-6">
              Palm From Indonesia is an agricultural export brand of PT Dua
              Zamrud Khatulistiwa, based in Tangerang, Banten. Founded in 2021,
              we help global buyers access Indonesia's natural ingredients with
              reliable documentation, careful handling, and transparent
              sourcing.
            </p>
            <p className="lead mt-4">
              Our mission is to connect demand with trusted local producers,
              creating a resilient supply chain that grows with our partners and
              supports farming communities.
            </p>

            <div
              className={`mt-4 overflow-hidden transition-all duration-700 ${
                showMore ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-4 rounded-2xl bg-white/70 p-5 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f3a2a]">
                  Export experience
                </h3>
                <p className="mt-2 text-sm text-[#3d352d]">
                  We launched with organic palm sugar and expanded into vanilla
                  and coconut derivatives after establishing PT Dua Zamrud
                  Khatulistiwa in 2022. Since then, we have built long-term
                  partnerships with buyers in Asia and beyond.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowMore(false)}
                className="mt-3 text-sm font-semibold text-[#b35f2a]"
              >
                Show less
              </button>
            </div>

            {!showMore && (
              <button
                type="button"
                onClick={() => setShowMore(true)}
                className="mt-4 inline-flex items-center text-sm font-semibold text-[#b35f2a]"
              >
                Read more
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>

          <div className="grid gap-6">
            <div className="rounded-3xl bg-white/70 p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8a7d6d]">
                Founders
              </p>
              <div className="mt-5 grid gap-6">
                {FOUNDERS.map((founder) => (
                  <div key={founder.id} className="flex items-center gap-4">
                    <Image
                      src={founder.imageSrc}
                      alt={founder.name}
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-2xl object-cover"
                    />
                    <div>
                      <p className="text-base font-semibold text-[#1f3a2a]">
                        {founder.name}
                      </p>
                      <p className="text-sm text-[#6f6152]">
                        {founder.position}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#1f3a2a]/10 bg-white/70 p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8a7d6d]">
                Our promise
              </p>
              <div className="mt-4 grid gap-3">
                {VALUES.map((value) => (
                  <div key={value.id} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1f3a2a] ring-1 ring-[#1f3a2a]/10">
                      <Image
                        src={value.svgSrc}
                        alt={value.title}
                        width={36}
                        height={36}
                        className="h-7 w-7"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1f3a2a]">
                        {value.title}
                      </p>
                      <p className="text-xs text-[#6f6152]">{value.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
