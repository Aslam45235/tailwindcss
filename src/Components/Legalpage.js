import React from 'react'
import { Shield, Mail, Cookie, Bell, Info } from 'lucide-react';
import Navbar from './Navbar';

function Legalpage() {
    return (

        <>

            <div className='w-full h-[640px] '>

                <div className='absolute w-full md:w-full lg:w-full'>
                    <Navbar color="black" backgroundColor="black" />
                </div>
                <div className='lg:full bg-[#F4F4F4] md:w-full w-full md:h-[982px] h-[813px] lg:px-16 px-4'>

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


            <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
                <div className="space-y-8">
                    {/* Information Collection Section */}
                    <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start">
                            <Info className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">1. Information we collect</h2>
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    We gather various types of information to enhance and optimize our services. This includes personal information such as your name, email address, phone number, and mailing address, collected when you register for an account, contact us, or use our services. We also gather usage information, which encompasses details about your interactions with our website and services, including your IP address.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Information Usage Section */}
                    <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start">
                            <Mail className="w-6 h-6 text-green-600 mt-1 mr-4" />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">2. How we use your information</h2>
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    Our utilization of the information we collect serves multiple purposes. We use your personal data to furnish requested services, such as responding to inquiries, processing orders, and delivering newsletters or updates if you opt to receive them. Additionally, we analyze usage information to gain insights into how our website and services are used, which informs our continuous improvement efforts, content customization, and enhancements to user experiences.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Communication Section */}
                    <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start">
                            <Bell className="w-6 h-6 text-purple-600 mt-1 mr-4" />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">3. Communication</h2>
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    We may employ your contact information to communicate with you concerning our services, provide updates, and convey important notices. You have the option to opt out of marketing communications at any time.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Cookies Section */}
                    <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start">
                            <Cookie className="w-6 h-6 text-orange-600 mt-1 mr-4" />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">4. Cookies and Tracking Technologies</h2>
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    To better understand your browsing behavior and improve your website experience, we utilize cookies and similar tracking technologies. Cookies are small data files stored on your device that facilitate our comprehension of your preferences. By visiting our website, you consent to our use of cookies in accordance with this Privacy Policy. You can manage cookie preferences through your browser settings.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Security Section */}
                    <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start">
                            <Shield className="w-6 h-6 text-red-600 mt-1 mr-4" />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">5. Security</h2>
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    We prioritize data security and employ reasonable measures to safeguard your information from unauthorized access, disclosure, alteration, or destruction. While we diligently strive to protect your data, it's important to acknowledge that no method of transmission over the Internet or electronic storage is entirely secure. Consequently, we cannot provide absolute security guarantees.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

        </>
    )
}

export default Legalpage;