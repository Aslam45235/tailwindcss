import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Legalpage() {
  return (
    <>
      <div className="w-full h-[640px] ">
        <div className="absolute w-full md:w-full lg:w-full">
          <Navbar color="black" />
        </div>
        <div className="lg:full bg-[#F4F4F4] md:w-full w-full md:h-[635px] h-[640px] lg:px-[100px] px-4">
          <div className="pt-[450px]">
            <h1 className="text-[40px] text-400 leading-[48px]">
              Privacy and Cookies Policy
            </h1>
            <div className="md:w-[535px]">
              <p className="text-[18px] text-400 leading-[25px] mt-10">
                This privacy is designed to inform you about how we collect,
                use, and protect your personal information when you interact
                with our website.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="w-full mt-[100px] px-4 lg:px-[100px]">
        <div className="space-y-8">
          {/* Information Usage Section */}
          <div className="w-[80%]">
            <h2 className="text-[#212529] leading-[48px] text-[40px]">
              1. Information we collect
            </h2>
            <p className="mt-4 text-[#212529] text-[18px]">
              We gather various types of information to enhance and optimize our
              services. This includes personal information such as your name,
              email address, phone number, and mailing address, collected when
              you register for an account, contact us, or use our services. We
              also gather usage information, which encompasses details about
              your interactions with our website and services, including your IP
              address, browser type, device information, pages visited, and
              actions taken.
            </p>
          </div>

          <div className="w-[80%]">
            <h2 className="text-[#212529] leading-[48px] text-[40px]">
              2. How we use your information
            </h2>
            <p className="mt-4 text-[#212529] text-[18px]">
              Our utilization of the information we collect serves multiple
              purposes. We use your personal data to furnish requested services,
              such as responding to inquiries, processing orders, and delivering
              newsletters or updates if you opt to receive them. Additionally,
              we analyze usage information to gain insights into how our website
              and services are used, which informs our continuous improvement
              efforts, content customization, and enhancements to user
              experiences.
            </p>
          </div>

          <div className="w-[80%]">
            <h2 className="text-[#212529] leading-[48px] text-[40px]">
              3. Communication
            </h2>
            <p className="mt-4 text-[#212529] text-[18px]">
              We may employ your contact information to communicate with you
              concerning our services, provide updates, and convey important
              notices. You have the option to opt out of marketing
              communications at any time.
            </p>
          </div>
          <div className="w-[80%]">
            <h2 className="text-[#212529] leading-[48px] text-[40px]">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="mt-4 text-[#212529] text-[18px]">
              To better understand your browsing behavior and improve your
              website experience, we utilize cookies and similar tracking
              technologies. Cookies are small data files stored on your device
              that facilitate our comprehension of your preferences. By visiting
              our website, you consent to our use of cookies in accordance with
              this Privacy Policy. You can manage cookie preferences through
              your browser settings.
            </p>
          </div>
          <div className="w-[80%]">
            <h2 className="text-[#212529] leading-[48px] text-[40px]">
              5. Security
            </h2>
            <p className="mt-4 text-[#212529] text-[18px]">
              We prioritize data security and employ reasonable measures to
              safeguard your information from unauthorized access, disclosure,
              alteration, or destruction. While we diligently strive to protect
              your data, it's important to acknowledge that no method of
              transmission over the Internet or electronic storage is entirely
              secure. Consequently, we cannot provide absolute security
              guarantees.
            </p>
          </div>
        </div>
      </main>

      <div className="mt-[100px]">
        <Footer />
      </div>
    </>
  );
}

export default Legalpage;
