import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navBar-container">
      <div className="navLogo-container">
        <Image
          className="nav_logo"
          src="src/assets/navbar_logo.png"
          alt="logo"
        />
      </div>
      <ul className="nav-content-container">
        <li className="nav-content">About Us</li>
        <li className="nav-content">Products</li>
        <li className="nav-content">Contacts</li>
      </ul>
    </nav>
  );
}
