import React from 'react'
import "../App.css"

function Navbar() {
    return (
        <>
            <div className='md:w-full flex h-[109px] md:px-4 lg:px-16 w-full items-center justify-between px-5 pt-[16px]'>
                <div className='flex justify-center items-center'>
                    <img className='mr-4' src='./images/logo.svg' alt='' />
                    <p className='P-tag'><span className='block span'>Oaklan</span>
                        Energy Consulting
                    </p>
                </div>
                <div className=' md:block hidden'>
                    <a className=' navbar-a md:mx-4 md:text-[18px]' href="">About us</a>
                    <a className=' navbar-a md:mx-4 md:text-[18px]' href="">Services</a>
                    <a className=' navbar-a md:mx-4 md:text-[18px]' href="">Portfolio</a>
                    <a className=' navbar-a md:mx-4 md:text-[18px]' href=""><button className=' btn md:px-[40px] md:py-[16px];'>Contect us</button></a>
                </div>
                <div className='md:hidden'>
                    <a href=""> <img src="./images/menu.svg" alt="" /> </a>
                </div>
            </div>
        </>
    )
}

export default Navbar;