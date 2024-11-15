"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/data";
import { useRouter, usePathname } from "next/navigation";
import { NavLink } from "@/constants/type";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSidebarDropdown = () =>
    setSidebarDropdownOpen(!sidebarDropdownOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar((prev) => {
        if (currentScrollY > lastScrollY && currentScrollY > 100) return false;
        if (currentScrollY < lastScrollY) return true;
        return prev;
      });

      setScrolled(currentScrollY > window.innerHeight * 0.1);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <nav
      className={`fixed flexBetween w-full h-16 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-slate-900 drop-shadow-xl" : "bg-transparent"} ${
        pathname === "/contact" ? "bg-slate-900" : ""
      }`}
    >
      <div className="flexStart lg:min-w-[50%] z-20">
        <Image
          className="lg:ml-10 lg:w-[250px] hover:cursor-pointer"
          onClick={() => router.push("/")}
          src="/navbar_logo.png"
          alt="logo"
          width={200}
          height={39.06}
        />
      </div>
      <div className=" hidden  gap-10 mx-auto md:flexCenter text-white ">
        {NAV_LINKS.map((link: NavLink) =>
          link.list ? (
            <div key={link.label}>
              <button
                aria-expanded={dropdownOpen}
                aria-controls={`${link.key}-dropdown`}
                onClick={toggleDropdown}
                className="regular-24 hover:font-semibold"
              >
                {link.key}
              </button>
              <div
                className={`${
                  showNavbar && dropdownOpen
                    ? "opacity-100 scale-100 mt-2"
                    : "opacity-0 scale-95"
                } ${
                  scrolled ? "bg-slate-900 drop-shadow-xl" : "bg-transparent"
                }  transform transition-all duration-300 flexStart flex-col absolute top-full w-48 regular-16 drop-shadow-md rounded-md z-10`}
                style={{
                  visibility: dropdownOpen ? "visible" : "hidden",
                }}
              >
                {link.list.map((product, n) => (
                  <Link
                    key={n}
                    href={`/products/${product.tag}`}
                    className="p-1 text-start hover:bg-opacity-50   w-full hover:font-semibold "
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
              className="regular-24 hover:font-semibold"
            >
              {link.label}
            </Link>
          )
        )}
      </div>
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={toggleMenu}
        className={`cursor-pointer lg:hidden md:hidden mr-10 ${
          menuOpen ? "hidden" : ""
        }`}
      >
        <path
          d="M5 7H19"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 12H19"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 17H19"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="white"
        className={`size-9 cursor-pointer lg:hidden md:hidden mr-10 bold-20 ${
          menuOpen ? "" : "hidden"
        }`}
        onClick={toggleMenu}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
      <div
        className={` md:hidden fixed top-16 md:top-20  w-screen flexStart flex-col drop-shadow-2xl text-slate-50 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } ${
          scrolled
            ? "bg-slate-900 drop-shadow-xl"
            : "bg-slate-950 bg-opacity-45"
        }`}
      >
        <div className="flex flex-col w-full">
          {NAV_LINKS.map((link, n) =>
            link.list ? (
              <div key={n} className="text-start w-full ">
                <p
                  className="text-lg hover:text-orange-400 w-full hover:bg-slate-800 p-2 pl-12 hover:border-l-4 border-orange-1"
                  onClick={toggleSidebarDropdown}
                >
                  {link.label}
                </p>
                {sidebarDropdownOpen && (
                  <div className="m-1 transition-all duration-300 ease-in-out transform">
                    {link.list.map((product, n) => (
                      <Link
                        key={n}
                        href={`/products/${product.tag}`}
                        className="block pl-20 py-1 hover:bg-opacity-50  hover:text-orange-400"
                        onClick={() => {
                          toggleMenu();
                          setSidebarDropdownOpen(false);
                        }}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={n}
                href={link.href}
                className="text-lg hover:text-orange-400 hover:bg-slate-800 w-full p-2 pl-12 hover:border-l-4 border-orange-1"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
