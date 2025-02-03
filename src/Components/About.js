import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
    return (
        <>

            <div className='w-full h-[590px]'>

                <div className='absolute w-full md:w-full lg:w-full'>
                    <Navbar color="black" />
                </div>
                <div className='lg:full bg-[#F4F4F4] md:w-full w-full md:h-[763px] h-[763px] lg:px-16 px-4'>

                    <div className='pt-[550px] md:h-[auto]'>
                        <h1 className="text-[40px] text-400 leading-[48px]">About us</h1>
                        <div className='md:w-[535px]'>
                            <p className="text-[18px] text-400 leading-[25px] mt-10">
                                Learn more about Oakland C.E. and our commitment to excellence, innovation, and sustainability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='main w-full h-[1029px] xl:h-[1029px] mt-[250px] md:px-20 px-4'>

                <div>
                    <h1 className="text-[40px] text-400 leading-[48px]">Innovation. <br />
                        Guiding our journey from the start.</h1>
                </div>

                <div className='w-full flex mt-[100px] md:gap-3 px-4'>
                    <div className='md:w-[40%] flex justify-end items-end'>
                        <div className=''>
                            <p className='text-[14px] leading-[20px] text-400 text-[#A6A6AB]'>Executive Board members <br />
                                Oakland. 2023</p>
                        </div>
                    </div>
                    <div>
                        <img className='w-full' src="./images/meeting.svg" alt="" />
                    </div>
                </div>


                <div>
                    <div className='w-[400px] md:w-auto lg:w-[700px] mt-[150px] px-4'>
                        <p className="text-[18px] text-400 leading-[25px] mt-10 text-justify">
                            Innovation has been at the heart of our journey right from the beginning. At Oakland C.E., we believe that staying at the forefront of technology and sustainable practices is essential. We've consistently sought innovative solutions in energy efficiency, LED lighting, photovoltaic energy, and electric mobility to shape a brighter and greener future. <br />
                            Our commitment to innovation drives us to continually explore new avenues, refine our processes, and deliver pioneering results for our clients. Join us in embracing innovation as we chart a course towards a more sustainable and efficient energy landscape.
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full lg:h-auto h-[180px] md:h-[250px] md:px-[100px] xl:px-[100px] xl:pt-[100px]  lg:mt-[100px] px-5'>
                <div>
                        <img src="./images/tree.svg" alt="" />
                </div>
            </div>





            <div className='md:px-[100px] flex justify-end'>
            <div className='w-[400px] md:w-auto lg:w-[700px] mt-[100px] px-4'>
                        <p className="text-[18px] text-400 leading-[25px] mt-10 text-justify">
                            Innovation has been at the heart of our journey right from the beginning. At Oakland C.E., we believe that staying at the forefront of technology and sustainable practices is essential. We've consistently sought innovative solutions in energy efficiency, LED lighting, photovoltaic energy, and electric mobility to shape a brighter and greener future. <br />
                            Our commitment to innovation drives us to continually explore new avenues, refine our processes, and deliver pioneering results for our clients. Join us in embracing innovation as we chart a course towards a more sustainable and efficient energy landscape.
                        </p>
                    </div>
                
            </div>

            <div className='mt-[100px]'>
                <Footer />
            </div>



        </>
    )
}

export default About