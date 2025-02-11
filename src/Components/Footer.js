import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-[#212529] py-12">
      <div className="md:flex w-full pt-12 pb-10 px-4 md:px-[100px]  ">
        <div className="flex w-[100%] md:w-[50%] justify-between lg:flex-row flex-col text-white">
          <div>
            <h3 className="text-white font-semibold text-[21px] mt-4">Pages</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-[21px] mt-4">
              Social Media
            </h3>
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <span>Facebook</span>
              </Link>
              <Link
                href="/"
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-[21px] mt-4">Legal</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/build"
                  className="hover:text-white transition-colors"
                >
                  Privacy and Cookies Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/legalpage"
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[100%] md:w-[50%] mt-10">
          <div className="flex justify-center sm:justify-end">
            <img src="./images/footer.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex md:justify-between px-4 md:px-[100px] md:flex-row flex-col justify-center items-center ">
        <p className="text-[#FFFFFF] text-[14px]">
          &copy; {new Date().getFullYear()} Oakland -Energy Consulting ©
        </p>

        <Link
          href="/"
          className="text-[14px] text-[#FFFFFF] transition-colors opacity-30"
        >
          Design by Ferréh
        </Link>
      </div>
    </div>

    // <footer className="bg-[#212529] text-gray-300">

    //   <div className="max-w- mx-auto px-4 md:px-[100px] py-12 ">
    //     <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
    //       {/* Pages Section */}
    //       <div>
    //         <h3 className="text-white font-semibold text-lg mb-4">Pages</h3>
    //         <ul className="space-y-2">
    //           <li>
    //             <Link href="/" className="hover:text-white transition-colors">
    //               Services
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/" className="hover:text-white transition-colors">
    //               About us
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/" className="hover:text-white transition-colors">
    //               Portfolio
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/" className="hover:text-white transition-colors">
    //               Contact us
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Social Media Section */}
    //       <div>
    // <h3 className="text-white font-semibold text-lg mb-4">
    //   Social Media
    // </h3>
    // <div className="flex flex-col space-y-4">
    //   <Link
    //     href="/"
    //     className="flex items-center space-x-2 hover:text-white transition-colors"
    //   >
    //     <span>Facebook</span>
    //   </Link>
    //   <Link
    //     href="/"
    //     className="flex items-center space-x-2 hover:text-white transition-colors"
    //   >
    //     <span>LinkedIn</span>
    //   </Link>
    // </div>
    //       </div>

    //       {/* Legal Section */}
    //       <div>
    // <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
    // <ul className="space-y-2">
    //   <li>
    //     <Link href="/" className="hover:text-white transition-colors">
    //       Privacy Policy
    //     </Link>
    //   </li>
    //   <li>
    //     <Link href="/" className="hover:text-white transition-colors">
    //       Terms & Conditions
    //     </Link>
    //   </li>
    // </ul>
    //       </div>

    //       {/* Newsletter Section */}
    // <div className="flex justify-center">
    //   <img src="./images/footer.svg" alt="" />
    // </div>
    //     </div>

    //     <div className=" mt-12 pt-8">
    //       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    //         <p>
    //              &copy; {new Date().getFullYear()} Oakland -Energy Consulting ©
    //         </p>
    //         <div className="mt-4 md:mt-0 text-center">
    //           <Link
    //   href="/"
    //   className="text-sm hover:text-white transition-colors"
    // >
    //   Design by Ferréh
    // </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
