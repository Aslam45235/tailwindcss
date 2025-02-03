import React, { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';
import Navbar from './Navbar';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Footer from './Footer';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        consent: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        setFormData(prev => ({
            ...prev,
            consent: e.target.checked
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    const position = [51.505, -0.09];

    return (
        <>
            <div className='w-full h-[640px] '>

                <div className='absolute w-full md:w-full lg:w-full'>
                    <Navbar color="black" buttonColor="black" buttontextcolor="white"/>
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



            <div className="h-[700px] bg-white">
                <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Location Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Location</h2>
                                <div className="flex items-start space-x-3 text-gray-600">
                                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                                    <div>
                                        <p>Avenida Marta Lopes, Nº2</p>
                                        <p>8400-401 Vila Real, Portugal</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Open hours</h2>
                                <div className="flex items-start space-x-3 text-gray-600">
                                    <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                                    <div>
                                        <p>Weekdays - 9:00am to 6:00pm</p>
                                        <p>Weekends - Closed</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Image */}

                        </div>

                        {/* Right Column - Contact Form */}
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Form</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="company"
                                            placeholder="Company (optional)"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                <div className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        name="consent"
                                        id="consent"
                                        checked={formData.consent}
                                        onChange={handleCheckboxChange}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        required
                                    />
                                    <label htmlFor="consent" className="text-sm text-gray-600">
                                        I consent to Oakland C.E. processing my data for contact purposes.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-32 bg-black text-white px-6 py-3 rounded-[40px] hover:bg-gray-800 transition-colors duration-200"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex h-[1200px] items-center justify-center gap-3 flex-col md:mt-[200px] mt-[300px] px-4  md:flex-row lg:flex-row xl:flex-row md:h-[550px] lg:mt-[0px] xl:mt-[0px]'>

                <div className="md:w-[60%] w-full h-[400px] md:h-[550px] lg:h-[518px] xl:h-[518px] border rounded-[8px]">
                    <MapContainer
                        center={position}
                        zoom={13}
                        style={{ height: '100%', width: '100%' }} // Tailwind doesn't control height/width for Leaflet maps directly
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                A sample location (London).
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className='h-auto md:h-[550px] lg:h-[518px] xl:h-[518px]'>
                    <img className='w-full h-auto md:h-[550px] lg:h-[518px] xl:h-[518px]' src="./images/apar.svg" alt="" />
                </div>
            </div>

            <div className='mt-[50px]'>
                <Footer />
            </div>
        </>
    );
}

export default Contact;