"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/data";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY.current || currentScrollY < 120);
      setScrolled(currentScrollY > 16);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${scrolled || menuOpen || pathname === "/contact" ? "glass-nav" : ""}`}
    >
      <div className="container-main flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/navbar_logo.png"
            alt="Palm From Indonesia"
            width={180}
            height={36}
            className="h-9 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-10 text-sm text-white md:flex">
          {NAV_LINKS.map((link) =>
            link.list ? (
              <div key={link.key} className="relative">
                <button
                  type="button"
                  aria-expanded={dropdownOpen}
                  aria-controls="products-menu"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-2 font-medium hover:text-[#f8d9a6]"
                >
                  {link.label}
                  <svg
                    className={`h-4 w-4 transition ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
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
                <div
                  id="products-menu"
                  className={`absolute left-0 mt-3 w-56 rounded-2xl border border-white/10 bg-[#101510]/95 p-3 text-sm shadow-lg transition ${
                    dropdownOpen ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  {link.list.map((product) => (
                    <Link
                      key={product.tag}
                      href={`/products/${product.tag}`}
                      className="block rounded-xl px-3 py-2 text-white/90 hover:bg-white/10"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.key}
                href={link.href}
                className="font-medium hover:text-[#f8d9a6]"
              >
                {link.label}
              </Link>
            )
          )}
          <Link href="/contact" className="btn-ghost text-white">
            Talk to us
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="white"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7H20"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M4 12H20"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M4 17H20"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`md:hidden ${
          menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300`}
      >
        <div className="container-main pb-6">
          <div className="mt-2 grid gap-2 rounded-3xl border border-white/10 bg-[#101510]/95 p-4 text-sm text-white">
            {NAV_LINKS.map((link) =>
              link.list ? (
                <div key={link.key}>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left"
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`h-4 w-4 transition ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
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
                  <div
                    className={`grid gap-1 pl-4 transition-all ${
                      dropdownOpen ? "max-h-48" : "max-h-0 overflow-hidden"
                    }`}
                  >
                    {link.list.map((product) => (
                      <Link
                        key={product.tag}
                        href={`/products/${product.tag}`}
                        className="rounded-xl px-3 py-2 text-white/80"
                        onClick={() => setMenuOpen(false)}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.key}
                  href={link.href}
                  className="rounded-xl px-3 py-2 text-white/80"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="rounded-xl bg-white/10 px-3 py-2 text-white"
              onClick={() => setMenuOpen(false)}
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
