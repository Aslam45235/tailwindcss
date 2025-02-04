import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const projects = [
  {
    id: 1,
    image: "./images/img1.svg",
    title: "Deloitte Building",
    location: "London",
    category: "LED Lighting",
  },
  {
    id: 2,
    image: "./images/img2.png",
    title: "Car Chargers",
    location: "Oakland",
    category: "Electric Mobility",
  },
  {
    id: 3,
    image: "./images/img3.png",
    title: "Amazon Headquarters",
    location: "UK",
    category: "LED Lighting",
  },
  {
    id: 4,
    image: "./images/img4.svg",
    title: "AstraZeneca Lab Facilities",
    location: "Nevada",
    category: "LED Lighting",
  },
  {
    id: 5,
    image: "./images/img5.svg",
    title: "Gordon's BBQ",
    location: "Las Vegas",
    category: "Energy Efficiency",
  },
  {
    id: 6,
    image: "./images/img6.svg",
    title: "Car Chargers",
    location: "Portugal",
    category: "Electric Mobility",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    title: "Deloitte Building",
    location: "London",
    category: "LED Lighting",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7",
    title: "Car Chargers",
    location: "Oakland",
    category: "Electric Mobility",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    title: "Amazon Headquarters",
    location: "UK",
    category: "LED Lighting",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    title: "AstraZeneca Lab Facilities",
    location: "Nevada",
    category: "LED Lighting",
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8",
    title: "Gordon's BBQ",
    location: "Las Vegas",
    category: "Energy Efficiency",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1593941707266-ba46c44c915d",
    title: "Car Chargers",
    location: "Portugal",
    category: "Electric Mobility",
  },
];

function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState(null);
  const itemsPerPage = 6;

  const filters = [
    { label: "LED Lighting" },
    { label: "Energy Efficiency" },
    { label: "Electric Mobility" },
  ];

  const filteredProjects = activeFilter
    ? projects.filter((project) => project.category === activeFilter)
    : projects;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProjects.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const imageUrl = "./images/carbg.svg";

  // Reset filter to show all projects
  const showAllProjects = () => {
    setActiveFilter(null);
    setCurrentPage(1); // Reset to first page
  };

  return (
    <>
      <div className="w-full h-[590px]">
        <div className="absolute w-full md:w-full lg:w-full">
          <Navbar Color="white" buttonOpacity={0.8} />
        </div>
        <div
          className="lg:full bg-no-repeat bg-cover md:bg-cover md:w-full w-full md:h-[763px] h-[763px] lg:px-[100px]  px-4"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="pt-[550px] md:h-[auto] text-[white]">
            <h1 className="text-[40px] text-400 leading-[48px]">Portfolio</h1>
            <div className="md:w-[535px]">
              <p className="text-[18px] text-400 leading-[25px] mt-10">
                Explore our portfolio of remarkable projects where innovation
                and sustainability converge.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-2 lg:px-[50px]">
        <div className="min-w-[20%] md:w-[700px] mt-[300px] px-4">
          <h1 className="text-[40px] text-400 leading-[48px]">
            Proudly helping businesses
          </h1>
          <p className="text-[18px] text-400 leading-[25px] mt-10">
            In a highly competitive industry, what distinguishes a company is
            not just its offerings but its unwavering commitment to excellence
            and innovation. At Oakland C.E., we understand that to rise above
            the competition, we must constantly strive for distinction in every
            aspect of our business. Our journey in the energy sector has been
            defined by innovation and expertise.
          </p>
          <div className="mt-10 text-[18px] text-400 leading-[25px] flex justify-between">
            <div className="flex justify-center items-center">
              <img src="./images/invoation.svg" alt="" />
              <span className="ml-2 text-[15px] md:text-[32px]">
                Innovation
              </span>
            </div>
            <div className="flex justify-center items-center">
              <img src="./images/expertise.svg" alt="" />
              <span className="ml-2 text-[15px] md:text-[32px]">Expertise</span>
            </div>
            <div className="flex justify-center items-center">
              <img src="./images/quality.svg" alt="" />
              <span className="ml-2 text-[15px] md:text-[32px]">Quality</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:p-[100px] bg-[#F4F4F4] md:mt-[120px] mt-[100px]">
        <div className="w-full h-[2820px] lg:h-[980px] md:h-[1500px]">
          <div className="min-h-screen p-4 md:p-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={showAllProjects} // Show all projects
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors
                                    ${
                                      !activeFilter
                                        ? " bg-[#A6A6AB] text-white"
                                        : "bg-white text-gray-700 hover:bg-gray-100"
                                    }`}
              >
                All
              </button>
              {filters.map(({ label }) => (
                <button
                  key={label}
                  onClick={() =>
                    setActiveFilter(activeFilter === label ? null : label)
                  }
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors
                                        ${
                                          activeFilter === label
                                            ? "bg-[#A6A6AB] text-white"
                                            : "bg-white text-gray-700 hover:bg-gray-100"
                                        }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg"
                >
                  {/* Rounded Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                  />

                  {/* Content Below Image */}
                  <div className="py-4  rounded-lg">
                    <h3 className="inline-block text-[#212529] text-[18px]">
                      {project.title}
                    </h3>
                    <p className=" pl-2 inline-block text-[#212529] text-[18px]">
                      {project.location}
                    </p>
                    <span className="block text-[#212529] text-[14px] mt-2">
                      {project.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-end items-end gap-2 mt-8">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded-full text-[18px] text-[#212529]
                                            ${currentPage === page ? "" : ""}`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="md:pl-10  md:w=[100%] w-full p-4 ">
        <div className=" 2xl:w-[50%] 2xl:pl-[100px] lg:w-[50%] md:w=[50%] w-full md:mt-10 mt-8 2xl:mt-[150px]">
          <h1 className="text-[40px] text-400 leading-[48px]">
            Get in touch with us
          </h1>
          <p className="text-[18px] text-400 leading-[25px] mt-10">
            If you're ready to explore how our expertise in energy efficiency,
            LED lighting, photovoltaic energy, and electric mobility can benefit
            your projects, don't hesitate to reach out. We're here to listen,
            collaborate, and provide you with tailored solutions that align with
            your specific needs and goals.
          </p>
          <div className="mt-10 text-[18px] text-400 leading-[25px] flex items-center">
                    <Link to="/legalpage"> <img src="./images/Linkbt.svg" alt="" /> </Link>
            </div>
        </div>
      </div>

      <div className=" w-full mt-20">
        <Footer />
      </div>
    </>
  );
}

export default Portfolio;
