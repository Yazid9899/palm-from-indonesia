"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const router = useRouter();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setShowNavbar(false);
        setDropdownOpen(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setShowNavbar(true);
      }

      // Set background color when scroll is past 100vh
      setScrolled(currentScrollY > window.innerHeight * 0.4);

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
      } ${scrolled ? "bg-green-2 drop-shadow-xl" : "bg-transparent"}`}
    >
      <div className="flexStart lg:min-w-[60%]">
        <Image
          className="ml-20 lg:w-[250px] hover:cursor-pointer"
          onClick={() => router.push("/")}
          src="/navbar_logo.png"
          alt="logo"
          width={200}
          height={39.06}
        />
      </div>
      <div className=" hidden  gap-10 mx-auto md:flexCenter text-white">
        {NAV_LINKS.map((link) =>
          link.list ? (
            <>
              <button
                key={link.key}
                onClick={toggleDropdown}
                className="regular-24 hover:font-semibold"
              >
                {link.key}
              </button>
              {dropdownOpen && (
                <div
                  className={`${
                    scrolled ? "bg-green-2 drop-shadow-xl" : "bg-transparent"
                  } flexStart flex-col absolute top-full w-48 regular-16 drop-shadow-md rounded-lg  `}
                >
                  {link.list.map((product, n) => (
                    <Link
                      key={n}
                      href={`/products/${product.tag}`}
                      className="p-1 text-start hover:bg-opacity-50  w-full hover:font-semibold "
                      onClick={() => setDropdownOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </>
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
      {menuOpen && (
        <div className="fixed top-0 right-0 h-screen flexStart flex-col shadow-xl shadow-[-10px_0_10px_rgba(0,0,0,0.1)] bg-slate-800 md:hidden w-56">
          <Image
            src="menu.svg"
            alt="menu"
            height={50}
            width={50}
            className="cursor-pointer lg:hidden md:hidden mr-8"
            onClick={toggleMenu}
          />
          <Link href={"/"} className="type-nav block m-5" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href={"/"} className="type-nav block m-5" onClick={toggleMenu}>
            Products
          </Link>
          <Link href={"/"} className="type-nav block m-5" onClick={toggleMenu}>
            Contacts
          </Link>
        </div>
      )}
    </nav>
  );
}
