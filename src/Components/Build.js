import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Build() {
  return (
    <>
      <div className="w-full h-[640px] ">
        <div className="absolute w-full md:w-full lg:w-full">
          <Navbar color="black" buttonColor="black" buttontextcolor="white" />
        </div>
        <div className="lg:full bg-[#F4F4F4] md:w-full w-full md:h-[700px] h-[750px] lg:px-16 px-4">
          <div className="pt-[500px] w-full md:h-auto">
            <h3 className="text-[#A6A6AB] text-[18px]">PORTFOLIO</h3>
            <h1 className="text-[40px] text-400 leading-[48px] mt-6">
              Delloite Building, London
            </h1>
            <div className="mt-10 w-full flex justify-between">
              <img className="" src="./images/left.svg" alt="" />
              <img className="" src="./images/right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 px-3 flex w-full md:px-[100px]">
        <div className="w-[30%] hidden md:block"></div>
        <div className="w-[100%] md:w-[70%] mt-[100px] ">
          <p className="text-[18px] text-400 leading-[25px] mt-10 ">
            Oakland C.E. has been at the forefront of energy transformation and
            sustainability for over two decades. Our commitment to innovation
            and expertise in energy efficiency has allowed us to undertake
            remarkable projects across the globe. One such endeavor that stands
            as a testament to our dedication to sustainable energy solutions is
            the Deloitte Building in the heart of London. <br /> <br />
            The Deloitte Building, an iconic structure in the bustling financial
            district of London, sought to reduce its carbon footprint and
            enhance its operational efficiency. Deloitte, a global leader in
            professional services, recognized the importance of adopting
            sustainable practices not only as a corporate responsibility but
            also as a strategic advantage. Oakland C.E. was entrusted with the
            mission to revolutionize the building's energy consumption patterns
            and lighting systems, aligning them with a greener and more
            sustainable future. <br /> <br />
            Our team of experts meticulously conducted an energy audit,
            scrutinizing every aspect of the Deloitte Building's energy
            consumption. This thorough analysis allowed us to identify areas
            where energy wastage was occurring and formulate a comprehensive
            energy efficiency strategy. Our recommendations ranged from
            optimizing HVAC systems to implementing advanced building management
            systems that dynamically adjusted lighting, temperature, and power
            usage based on occupancy and natural lighting conditions. <br />{" "}
            <br />
          </p>
        </div>
      </div>

      <div className="p-5 px-3 flex w-full md:px-[100px]">
        <div className="md:w-[70%]  w-[100%]">
          <img src="./images/buildbg.svg" alt="" className="w-full" />
        </div>
        <div className="w-[30%] hidden md:block"></div>
      </div>

      <div className="p-5 px-3 flex w-full md:px-[100px]">
        <div className="w-[22%]  hidden md:block"></div>
        <div className="w-[100%] mt-[30px] md:w-[70%]  ">
          <img src="./images/buildbg1.svg" alt=""className="w-full h-auto" />
        </div>
      </div>

      <div className="md:pl-10  md:w=[100%] w-full p-4 lg:px-[100px]">
        <div className=" 2xl:w-[50%] 2xl:pl-[100px] lg:w-[50%] md:w=[50%] w-full md:mt-10 mt-8 2xl:mt-[100px]">
          <h1 className="text-[40px] text-400 leading-[48px]">
            Get in touch with us
          </h1>
          <p className="text-[18px] text-400 leading-[25px] mt-10">
            If you're ready to explore how our expertise in energy efficiency,
            LED lighting, photovoltaic energy, and electric mobility can benefit
            your projects, don't hesitate to reach out. We're here to listen,
            collaborate, and provide you with tailored solutions that align with
            your specific needs and goals.
          </p>
          <div className="mt-10 text-[18px] text-400 leading-[25px] flex items-center">
            <Link to="/contact">
              {" "}
              <img src="./images/Linkbt.svg" alt="" />{" "}
            </Link>
          </div>
        </div>
      </div>

      <div className=" w-full mt-20">
        <Footer />
      </div>
    </>
  );
}

export default Build;
