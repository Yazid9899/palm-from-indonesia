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
      <div className="flexStart lg:min-w-[50%]">
        <Image
          className="lg:ml-10 lg:w-[250px] hover:cursor-pointer"
          onClick={() => router.push("/")}
          src="/navbar_logo.png"
          alt="logo"
          width={200}
          height={39.06}
        />
      </div>
      <div className=" hidden  gap-10 mx-auto md:flexCenter text-white">
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
      <Image
        src="menu.svg"
        alt="menu"
        height={50}
        width={50}
        className="cursor-pointer lg:hidden md:hidden mr-8"
        onClick={toggleMenu}
      />
      <div
        className={`fixed top-0 right-0 h-screen flexStart flex-col shadow-xl text-white bg-slate-950 w-56 z-50 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="cursor-pointer lg:hidden md:hidden m-5  bold-20"
          onClick={toggleMenu}
        >
          X
        </button>
        <div className="flex flex-col gap-5 pl-2">
          {NAV_LINKS.map((link, n) =>
            link.list ? (
              <div key={n}>
                {" "}
                <button
                  className="regular-24 hover:font-semibold"
                  onClick={toggleSidebarDropdown}
                >
                  {link.label}
                </button>
                {sidebarDropdownOpen && (
                  <div className="ml-5 transition-all duration-300 ease-in-out transform">
                    {link.list.map((product, n) => (
                      <Link
                        key={n}
                        href={`/products/${product.tag}`}
                        className="block p-1 hover:bg-opacity-50 text-white hover:font-semibold"
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
                className="regular-24 hover:font-semibold"
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
