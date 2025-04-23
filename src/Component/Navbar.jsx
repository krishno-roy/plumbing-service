import React, { useState } from 'react'
import Logo from "../assets/logo.png";
import { Link } from 'react-router';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => setMenuOpen(!menuOpen);
const closeMenu = () => setMenuOpen(false);

  return (
    <header className="shadow-md">
      <nav className="container mx-auto flex justify-between py-3 px-12 items-center ">
        {/* icon  */}
        <div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        {/* desktop menu */}
        <div className="hidden md:block">
          <div className="flex gap-7">
            <ul className="flex gap-6 font-semibold items-center">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About Us</Link>
              </li>
              <li>
                <Link to="service">Service</Link>
              </li>
              <li>
                <Link to="/">Project</Link>
              </li>
              <li>
                <Link to="/">Blogs</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
            <div>
              <button className="bg-red-600 py-3 px-7 rounded text-white">
                Request a call Back
              </button>
            </div>
          </div>
        </div>
        {/* moblie menu iocn  */}
        <div className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <RiCloseFill className="text-3xl cursor-pointer" />
          ) : (
            <RiMenu3Fill className="text-3xl cursor-pointer" />
          )}
        </div>
      </nav>
      {/* mobile menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white text-center w-full shadow py-3">
          <ul className="flex flex-col gap-5 py-4 font-semibold">
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="service" onClick={closeMenu}>
                Service
              </Link>
            </li>
            <li>
              <Link to="/" onClick={closeMenu}>
                Project
              </Link>
            </li>
            <li>
              <Link to="/" onClick={closeMenu}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
          <button
            onClick={closeMenu}
            className="bg-red-600 py-3 px-7 rounded text-white"
          >
            Request a call Back
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar