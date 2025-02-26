import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Services",
      path: "/services"
    },
    {
      title: "Blog",
      path: "/blog"
    },
    {
      title: "Contact",
      path: "/contact"
    },
  ]
  return (
    <nav className="navbar bg-base-100 container mx-auto">
      {/* Navbar Start */}
      <div className="navbar-start">
        <a href="/">
          <img src="/assets/logo.svg" height={66} width={100} alt="Logo" />
        </a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center">
        <ul className="flex items-center space-x-6 font-semibold hover:text-primary duration-300">
          {navItems.map((item) => (
            <li key={item.path}>
              <a href={item.path} className="hover:text-primary transition duration-300">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <div className="flex space-x-3 items-center ">
          <MdOutlineShoppingCart className="text-xl" />
          <IoIosSearch className="text-xl" />
          <button className="btn btn-outline btn-primary px-8">Appointment</button>
          <Link href="/login" className="btn btn-outline btn-primary px-8">Login</Link>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
