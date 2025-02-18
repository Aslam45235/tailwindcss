import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar({
  Color,
  backgroundColor,
  buttonColor,
  buttontextcolor,
  buttonOpacity = 1,
  menuColor,
}) {
  // State to track whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Reference for the mobile menu to detect clicks outside of it
  const menuRef = useRef(null);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Add event listener to detect clicks outside the menu
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className="md:w-full flex h-[109px] md:px-[20px] lg:px-[100px] w-full items-center justify-between px-5 pt-[16px]"
        style={{ backgroundColor }}
      >
        <Link to="/">
          <div
            style={{ color: Color }}
            className="flex justify-center items-center"
          >
            <img
              className="mr-4"
              src="./images/logo.svg"
              alt=""
              style={{ color: buttonColor }}
            />
            <p className="P-tag" style={{ color: menuColor }}>
              <span className="block span" style={{ color: Color }}>
                Oaklan
              </span>
              Energy Consulting
            </p>
          </div>
        </Link>

        {/* Desktop menu */}
        <div className="md:block hidden">
          <Link
            className="navbar-a md:mx-4 md:text-[18px]"
            style={{ color: Color }}
            to="/about"
          >
            About us
          </Link>
          <Link
            className="navbar-a md:mx-4 md:text-[18px]"
            style={{ color: Color }}
            to="/services"
          >
            Services
          </Link>
          <Link
            className="navbar-a md:mx-4 md:text-[18px]"
            style={{ color: Color }}
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link className="navbar-a md:mx-4 md:text-[18px]" to="/contact">
            <button
              className="btn md:px-[40px] md:py-[16px];"
              style={{
                backgroundColor: buttonColor,
                color: Color,
                color: buttontextcolor,
                opacity: buttonOpacity,
              }}
            >
              {" "}
              <span style={{ color: Color }}>Contact us</span>
            </button>
          </Link>
        </div>

        {/* Mobile menu icon */}
        <div
          className="md:hidden rounded-[50%]"
          style={{ backgroundColor: buttonColor }}
        >
          <a href="#" onClick={toggleMenu}>
            <img src="./images/menu.svg" alt="" />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
  className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
    menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
>
  <div
    className={`flex justify-center items-start w-full h-full transform ${
      menuOpen ? "translate-x-0" : "translate-x-full"
    } transition-all duration-300 ease-in-out`}
  >
    <div
      ref={menuRef}
      style={{ color: Color }}
      className="flex flex-col items-center rounded-lg  p-8 w-3/4 md:w-1/2 mt-16" // Added mt-16 for top spacing
    >
      <Link
        className="navbar-a text-[16px] p-4 transition-colors"
        to="/about"
      >
        About us
      </Link>
      <Link
        className="navbar-a text-[16px] p-4 transition-colors"
        to="/services"
      >
        Services
      </Link>
      <Link
        className="navbar-a text-[16px] p-4 transition-colors"
        to="/portfolio"
      >
        Portfolio
      </Link>
      <Link
        className="navbar-a text-[16px] p-4 transition-colors"
        to="/contact"
      >
        <button className="btn text-white px-7 py-4 rounded-lg mt-6 hover:text-[#A6A6AB] transition-all">
          Contact us
        </button>
      </Link>
    </div>
  </div>
</div>

    </>
  );
}

export default Navbar;
