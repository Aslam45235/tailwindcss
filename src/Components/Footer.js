import React from 'react';
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-[#212529] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Pages Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Pages</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Social Media</h3>
            <div className="flex flex-col space-y-4">
              <a href="#" className="flex items-center space-x-2 hover:text-white transition-colors">
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-white transition-colors">
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <img src="./images/footer.svg" alt="" />
          </div>
        </div>

        <div className=" mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/build"> <p>&copy; {new Date().getFullYear()} Oakland -Energy Consulting ©</p> </Link>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-white transition-colors">
              Design by Ferréh
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;