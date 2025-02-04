import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="lg:full md:w-full w-full md:flex md:h-[982px] ">
        <div className="nav w-full md:w-full lg:w-full">
          <Navbar Color="white" menuColor="#A6A6AB"/>
        </div>

        <div className="lg:full bg-black md:w-[50%] w-full md:h-[982px] h-[813px] lg:px-16 xl:px-[100px]">
          <div className="px-4 pt-[380px]  md:pt-[550px]">
            <h1 className=" leading-[77px] text-white text-[64px]  text-400">
              Redefining <br />
              Energy
            </h1>
            <p className="pt-[48px] w-[100%] sm:pr-12 text-white pr-8">
              As market leaders for 20 years, we are experts in energy
              efficiency, providing tailored, concrete solutions to meet your
              needs.
            </p>
            <button className="px-[40px] py-[16px] mt-[48px] bg-white rounded-[40px]">
              View our Portfolio
            </button>
          </div>
        </div>
        <div className="lg:full md:w-[50%] md:h-[982px]">
          <img
            src="./images/bg.svg"
            className="w-full h-full object-cover md:w-full md:h-[982px] md:object-cover"
            alt=""
          />
        </div>
      </div>




      <div className="w-full h-[680px] md:h-[710px] flex md:justify-center md:items-center mt-4">
        <div className=" w-[90%] h-[553px] 2xl:pl-[100px] pl-4">
          <div>
            <h1 className="text-[40px] leading-[48px] text-400 ">
              Areas of Expertise
            </h1>
            <p className="mt-[40px] text-[18px] leading-[25px]">
              Whether for small or large-scale projects, we are committed to
              delivering cutting-edge results,
              <br className="hidden lg:block" /> contributing to a more
              sustainable and innovative energy future.
            </p>
          </div>
          <div className=" overflow-scroll w-full xl:overflow-hidden md:w-full ">
            <div className="md:flex justify-between flex xl:w-full w-[1300px] lg:gap-6 gap-[20px] md:overflow-hidden ">
              <div className="mt-[40px] w-[313px] h-[375px] ">
                <img src="./images/frame1.svg" alt="" />
              </div>
              <div className="mt-[40px] w-[313px] h-[375px] ">
                <img src="./images/frame2.svg" alt="" />
              </div>
              <div className="mt-[40px] w-[313px] h-[375px] ">
                <img src="./images/frame3.svg" alt="" />
              </div>
              <div className="mt-[40px] w-[313px] h-[375px] ">
                <img src="./images/frame4.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full xs:h-auto md:h-auto h-[300px] flex ">
        <div className="w-full md:w-[40%] hidden md:block"></div>
        <div className="w-[100%] md:w-[60%] pl-5 md:pr-5 xs:mt-[50px] md:mt-1">
          <p className="pr-14 text-[18px]">
            Leading the market for two decades, we have been experts in energy
            efficiency. With an unwavering commitment to innovation, we offer
            tailored solutions for projects of all sizes. From LED lighting to
            photovoltaic energy and electric mobility, our dedicated team works
            tirelessly to deliver cutting-edge results. We are committed to
            shaping a more sustainable and efficient energy future.
          </p>
        </div>
      </div>

      <div className="w-full h-auto bg-[#F4F4F4] xl:px-[100px]  px-4">


        <div className="md:flex lg:gap-[100px] xs:mt-[50px] sm-md:mt-[50px] gap-6 md:px-10 xl:pl-[80px]  md:mt-[150px]  ">


          <div className=" w-full md:w-[50%] md:relative md:bottom-20">
            <img className="w-full" src="./images/apar.svg" alt="Image" />
          </div>



          <div className="md:w=[50%] w-full flex justify-center flex-col">
            <h1 className="text-[40px] text-400 leading-[48px]">Deep knowledge in the field</h1>
            <p className="text-[18px] text-400 leading-[25px] mt-10">
              Our extensive experience and deep expertise in the energy sector
              have positioned us as leaders in the industry. With two decades of
              market leadership, we have honed our knowledge in energy
              efficiency, LED lighting, photovoltaic energy, and electric
              mobility to a level that sets us apart. Our team's profound
              understanding of these domains enables us to provide innovative,
              tailored solutions that not only meet but exceed the expectations
              of our clients.
            </p>
            <div className="mt-10 text-[18px] text-400 leading-[25px]">
              <a href="">Learn more..</a>
            </div>
          </div>
        </div>
      </div>


      <div className="md:pl-10  md:w=[100%] w-full p-4 lg:px-[100px]  ">
        <div className=" 2xl:w-[50%] 2xl:pl-[100px] lg:w-[50%] md:w=[50%] w-full md:mt-10 mt-8 2xl:mt-[150px]">
          <h1 className="text-[40px] text-400 leading-[48px]">Get in touch with us</h1>
          <p className="text-[18px] text-400 leading-[25px] mt-10">
            If you're ready to explore how our expertise in energy efficiency, LED lighting, photovoltaic energy, and electric mobility can benefit your projects, don't hesitate to reach out. We're here to listen, collaborate, and provide you with tailored solutions that align with your specific needs and goals.
          </p>
          <div className="mt-10 text-[18px] text-400 leading-[25px] flex items-center">
            <Link to="/build"> <img src="./images/Linkbt.svg" alt="" /> </Link>
          </div>
        </div>
      </div>

      <div className="md:mt-[50px] mt-[50px]">
        <Footer />
      </div>
    </>
  );
}

export default Home;
