import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <div className="w-full h-[590px]">
        <div className="absolute w-full md:w-full lg:w-full">
          <Navbar buttontextcolor="white" buttonColor="black"/>
        </div>
        <div className="lg:full bg-[#F4F4F4] md:w-full w-full md:h-[763px] h-[763px] lg:px-[100px]  px-4">
          <div className="pt-[550px] md:h-[auto]">
            <h1 className="text-[40px] text-400 leading-[48px]">About us</h1>
            <div className="md:w-[535px]">
              <p className="text-[18px] text-400 leading-[25px] mt-10">
                Learn more about Oakland C.E. and our commitment to excellence,
                innovation, and sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="main w-full h-[1029px] xl:h-[1029px] mt-[250px] md:px-20 px-4 lg:px-[100px] ">
        <div>
          <h1 className="text-[40px] text-400 leading-[48px]">
            Innovation. <br />
            Guiding our journey from the start.
          </h1>
        </div>

        <div className="w-full flex justify-center mt-[100px] md:gap-3 px-4">
          <div className="md:w-[40%] flex justify-end items-end">
            <div className="">
              <p className="text-[14px] leading-[20px] text-400 text-[#A6A6AB]">
                Executive Board members <br />
                Oakland. 2023
              </p>
            </div>
          </div>
          <div>
            <img className="w-full" src="./images/meeting.svg" alt="" />
          </div>
        </div>

        <div>
          <div className="min-w-[20%] md:w-auto lg:w-[700px] mt-[70px] lg:mt-[100px] px-4">
            <p className="text-[18px] text-400 leading-[25px] mt-10 ">
              Innovation has been at the heart of our journey right from the
              beginning. At Oakland C.E., we believe that staying at the
              forefront of technology and sustainable practices is essential.
              We've consistently sought innovative solutions in energy
              efficiency, LED lighting, photovoltaic energy, and electric
              mobility to shape a brighter and greener future. <br />
              Our commitment to innovation drives us to continually explore new
              avenues, refine our processes, and deliver pioneering results for
              our clients. Join us in embracing innovation as we chart a course
              towards a more sustainable and efficient energy landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center xl:h-auto h-[180px] md:min-h-[20%px] md:px-[50px] xl:px-[100px] xl:pt-[100px] mt-[15px]  lg:mt-[100px] px-5">
        <div>
          <img src="./images/tree.svg" alt="" />
        </div>
      </div>

      <div className="md:px-[100px] px-3 flex md:justify-end">
        <div className="w-[408px] md:w-auto lg:w-[700px] mt-[100px] px-4">
          <p className="text-[18px] text-400 leading-[25px] mt-10 ">
            From our company's inception, innovation has been ingrained in our
            DNA. It's not just a buzzword; it's the driving force behind
            everything we do. Our founders were visionaries who understood that
            to make a real impact in the energy sector, we needed to lead with
            innovation. <br />
            This commitment to cutting-edge solutions has allowed us to
            consistently push the boundaries of what's possible in energy
            efficiency, LED lighting, photovoltaic energy, and electric
            mobility. We've fostered a culture that encourages creativity,
            embraces change, and thrives on challenges. As we continue to grow,
            our dedication to innovation remains unwavering, ensuring that we
            remain a trailblazer in the industry.
          </p>
        </div>
      </div>

      <div className="mt-[100px]">
        <Footer />
      </div>
    </>
  );
}

export default About;
