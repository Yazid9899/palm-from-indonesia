import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flexBetween fixed w-full py-5 h-[6.25rem] z-50">
      <div className="flexStart min-w-[60%]">
        <Image
          className=" ml-20"
          src="/navbar_logo.png"
          alt="logo"
          width={250}
          height={39.06}
        />
      </div>
      <div className="hidden flexCenter gap-10 mx-auto md:flex">
        <Link href={"/"} className="type-nav">
          About Us
        </Link>
        <Link href={"/"} className="type-nav">
          Products
        </Link>
        <Link href={"/"} className="type-nav">
          Contacts
        </Link>
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        height={35}
        width={35}
        className="cursor-pointer lg:hidden"
      />
    </nav>
  );
}
