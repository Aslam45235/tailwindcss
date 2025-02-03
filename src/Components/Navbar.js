import React, { useState, useEffect, useRef } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

function Navbar({ Color, backgroundColor , buttonColor , buttontextcolor , buttonOpacity = 1}) {
  // State to track whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Reference for the mobile menu to detect clicks outside of it
  const menuRef = useRef(null);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Add event listener to detect clicks outside the menu
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='md:w-full flex h-[109px] md:px-4 lg:px-16 w-full items-center justify-between px-5 pt-[16px]' style={{ backgroundColor }}>
        <div style={{ color: Color }} className='flex justify-center items-center'>
          <img className='mr-4' src='./images/logo.svg' alt='' />
          <p className='P-tag'>
            <span className='block span'>Oaklan</span>
            Energy Consulting
          </p>
        </div>

        {/* Desktop menu */}
        <div className='md:block hidden'>
          <Link className='navbar-a md:mx-4 md:text-[18px]' style={{ color: Color }} to="/about">About us</Link>
          <Link className='navbar-a md:mx-4 md:text-[18px]' style={{ color: Color }} to="/services">Services</Link>
          <Link className='navbar-a md:mx-4 md:text-[18px]' style={{ color: Color }} to="/portfolio">Portfolio</Link>
          <Link className='navbar-a md:mx-4 md:text-[18px]' to="/contact">
            <button style={{ backgroundColor: buttonColor, color: Color ,   opacity: buttonOpacity}} className='btn md:px-[40px] md:py-[16px];'>Contact us</button>
          </Link>
        </div>

        {/* Mobile menu icon */}
        <div className='md:hidden'>
          <a href="#" onClick={toggleMenu}>
            <img src="./images/menu.svg" alt="" />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`flex justify-center items-center w-full h-full transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300 ease-in-out`}>
          <div
            ref={menuRef}
            style={{ color: Color }}
            className="flex flex-col items-center bg-[#A6A6AB] rounded-lg shadow-lg p-8 w-3/4 md:w-1/2"
          >
            <a className="navbar-a text-xl md:text-[20px] p-4 hover:text-blue-600 transition-colors" href="">About us</a>
            <a className="navbar-a text-xl md:text-[20px] p-4 hover:text-blue-600 transition-colors" href="">Services</a>
            <a className="navbar-a text-xl md:text-[20px] p-4 hover:text-blue-600 transition-colors" href="">Portfolio</a>
            <a className="navbar-a text-xl md:text-[20px] p-4 hover:text-blue-600 transition-colors" href="">
              <button className="btn bg-blue-600 text-white px-8 py-4 rounded-lg mt-6 hover:bg-blue-700 transition-all">
                Contact us
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

