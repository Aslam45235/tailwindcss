import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Services() {
    return (
        <>
            <div className='w-full h-[640px] text-white'>

                <div className='absolute w-full md:w-full lg:w-full'>
                    <Navbar color="white" />
                </div>
                <div className='lg:full bg-[#000000] md:w-full w-full md:h-[700px] lg:h-[700px] xl:h-[700px] lg:px-16 px-4'>

                    <div className='pt-[450px]'>
                        <h1 className="text-[40px] text-400 leading-[48px]">Contact us</h1>
                        <div className='md:w-[535px]'>
                            <p className="text-[18px] text-400 leading-[25px] mt-10">
                                Our team is here to assist you on your journey towards a sustainable and efficient energy future.
                            </p>
                        </div>

                    </div>
                </div>

            </div>

            <div className='main w-full h-[1300px] xl:h-[1560px] md:mt-[200px] md:px-20 mt-20'>

                <div>
                    <div className='dropdown flex justify-between items-center md:pt-[40px] md:pb-[10px]'>
                        <h1 className='md:text-[48px] md:leading-[58.08px] text-400 text-[35px] leading-[58.08px] text-400'>Illumination</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                    </div>
                    <div className='dropdown flex justify-between items-center pt-[40px] pb-[10px]'>
                        <h1 className='md:text-[48px] md:leading-[58.08px] text-400  text-[35px] leading-[58.08px] text-400'>Sustainable Energy</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                    </div>
                    <div className='dropdown flex justify-between items-center pt-[40px] pb-[10px] text-[35px] leading-[58.08px] text-400'>
                        <h1 className='md:text-[48px] md:leading-[58.08px] text-400'>Electric Mobility</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                    </div>
                    <div className='dropdown1 flex justify-between items-center pt-[40px] pb-[10px] text-[35px] leading-[58.08px] text-400'>
                        <h1 className='md:text-[48px] md:leading-[58.08px] text-400'>Consulting</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                    </div>
                </div>

                <div className='w-full flex mt-[100px] md:gap-3 px-4'>
                    <div className='md:w-[40%] flex justify-end items-end'>
                            <div className=''>
                                  <p className='text-[14px] leading-[20px] text-400 text-[#A6A6AB]'>Sustainable energy consulting <br />
                                  Portugal. 2023</p>  
                            </div>
                    </div>
                    <div>
                        <img className='w-full' src="./images/power.svg" alt="" />
                    </div>
                </div>


                <div>
                    <div className='w-[400px] md:w-[700px] mt-[150px] px-4'>
                        <h1 className="text-[40px] text-400 leading-[48px]">Proudly helping businesses</h1>
                        <p className="text-[18px] text-400 leading-[25px] mt-10">
                            Explore our portfolio of remarkable projects where innovation and sustainability converge. Discover how we've transformed energy landscapes and elevated standards in the industry.                        </p>
                        <div className="mt-10 text-[18px] text-400 leading-[25px]">
                            <a href="">View our Portfolio</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className=' w-full mt-20'>
                <Footer />
            </div>


        </>
    )
}

export default Services
