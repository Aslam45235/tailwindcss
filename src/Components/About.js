import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <div className="w-full h-[590px]">
        <div className="absolute w-full md:w-full lg:w-full">
          <Navbar buttontextcolor="white" buttonColor="black" />
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

      <div className="main w-full h-auto mt-[250px] md:px-20 px-4 lg:px-[100px] ">
        <div>
          <h1 className="text-[40px] text-400 leading-[48px]">
            Innovation. <br />
            Guiding our journey from the start.
          </h1>
        </div>

        <div className="w-full md:flex justify-end mt-[5rem] md:gap-3 px-4">
  <div className="md:w-[60%] w-full flex justify-center md:justify-end items-end md:order-2 order-1">
    <img className="w-full" src="./images/meeting.svg" alt="" />
  </div>
  <div className="md:w-[40%] w-full flex justify-end items-end md:order-1 order-2 mt-4 md:mt-0">
    <div className="text-right w-[10rem]">
      <p className="text-[14px] leading-[20px] text-400 text-[#A6A6AB]">
        Executive Board members Oakland. 2023
      </p>
    </div>
  </div>
</div>




        <div>
          <div className=" md:w-auto max-w-[1100px] mt-[70px] lg:mt-[100px] px-4">
            <p className="text-[18px] text-400 leading-[25px] mt-10 ">
              Innovation has been at the heart of our journey right from the
              beginning. At Oakland C.E., we believe that staying at the
              forefront of technology and sustainable practices is essential.
              We've consistently sought innovative solutions in energy
              efficiency, LED lighting, photovoltaic energy, and electric
              mobility to shape a brighter and greener future. <br /> <br />
              Our commitment to innovation drives us to continually explore new
              avenues, refine our processes, and deliver pioneering results for
              our clients. Join us in embracing innovation as we chart a course
              towards a more sustainable and efficient energy landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center h-auto md:px-[50px] px-4 mt-[5rem]">
        <div>
          <img src="./images/tree.svg" className="w-full h-auto" alt="" />
        </div>
      </div>

      <div className="md:px-[100px] px-3 flex md:justify-end">
        <div className="md:w-auto max-w-[1100px] mt-[50px] px-4">
          <p className="text-[18px] text-400 leading-[25px] mt-10 ">
            From our company's inception, innovation has been ingrained in our
            DNA. It's not just a buzzword; it's the driving force behind
            everything we do. Our founders were visionaries who understood that
            to make a real impact in the energy sector, we needed to lead with
            innovation. <br /> <br />
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
