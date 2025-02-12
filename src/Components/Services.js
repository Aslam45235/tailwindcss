import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";

function Services() {
  // State to track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle dropdowns
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const services = [
    { title: "Illumination", id: "illumination" },
    { title: "Sustainable Energy", id: "energy" },
    { title: "Electric Mobility", id: "mobility" },
    { title: "Consulting", id: "consulting" },
  ];

  return (
    <>
      <div className="w-full h-[700px] text-white">
        <div className="absolute w-full md:w-full lg:w-full">
          <Navbar color="white" />
        </div>
        <div className="lg:full bg-[#212529] md:w-full  h-[800px] lg:px-[100px]  px-4">
          <div className="pt-[550px]">
            <h1 className="text-[40px] text-400 leading-[48px]">Services</h1>
            <div className="md:w-[535px]">
              <p className="text-[18px] text-400 leading-[25px] mt-10 mb-16">
                Discover our comprehensive range of services tailored to meet
                your energy efficiency, LED lighting, photovoltaic energy, and
                much more.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="main w-full min-h-[100%] xl:h-[1430px] md:mt-[200px] px-4 pt-5 md:px-20 lg:px-[100px] mt-20">
  <div className="w-full">
    {services.map((item, index) => (
      <div
        key={item.id}
        className={`${
          index === services.length - 1 ? "border-t border-gray-300" : "border-t border-gray-300"
        }`}
      >
        {/* Dropdown Button */}
        <div
          className="flex justify-between items-center py-4 cursor-pointer md:gap-x-[200px]"
          onClick={() => toggleDropdown(item.id)}
        >
          <h1 className="md:text-[48px] md:leading-[58.08px] text-[20px] font-[400]">
            {item.title}
          </h1>
          <svg
            width="28"
            height="32"
            viewBox="0 0 31 36"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
            className={`size-8 transition-transform duration-300 ${
              openDropdown === item.id ? "rotate-180" : ""
            }`}
          >
            <path
              d="M-1.61425e-06 19.9297L2.57812 17.3047L13.4062 28.0859L13.4062 0.101561L17.1562 0.101561L17.1562 28.0859L27.9375 17.3047L30.5625 19.9297L15.2812 35.1641L-1.61425e-06 19.9297Z"
              fill="#A6A6AB"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </div>

        {/* Dropdown Content */}
        {openDropdown === item.id && (
          <div className="p-4 rounded-md">
            <p className="text-gray-700">
              This is more information about {item.title}.
            </p>
          </div>
        )}
      </div>
    ))}
  </div>




        <div className="w-full md:flex justify-end mt-[5rem] md:gap-3 px-4">
  <div className="md:w-[60%] w-full flex justify-center md:justify-end items-end md:order-2 order-1">
    <img className="w-full" src="./images/power.svg" alt="" />
  </div>
  <div className="md:w-[40%] w-full flex justify-end items-end md:order-1 order-2 mt-4 md:mt-0">
    <div className="text-right w-[12rem]">
      <p className="text-[14px] leading-[20px] text-400 text-[#A6A6AB]">
        Executive Board members Oakland. 2023
      </p>
    </div>
  </div>
</div>

        <div>
          <div className="min-w-[20%] md:w-[700px] mt-[40px] md:mt-[50px] px-4">
            <h1 className="text-[40px] text-400 leading-[48px]">
              Proudly helping businesses
            </h1>
            <p className="text-[18px] text-400 leading-[25px] mt-10">
              Explore our portfolio of remarkable projects where innovation and
              sustainability converge. Discover how we've transformed energy
              landscapes and elevated standards in the industry.
            </p>
              <Link to="/portfolio">
            <div className="mt-10 text-[18px] text-400 leading-[25px] flex items-center">
                <p>View our Portfolio</p>
                <img src="./images/arrow.svg" alt="" className="pt-1 pl-2"/>
            </div>
              </Link>
          </div>
        </div>
      </div>

      <div className=" w-full mt-[30px] md:mt-[100px]">
        <Footer />
      </div>
    </>
  );
}

export default Services;
