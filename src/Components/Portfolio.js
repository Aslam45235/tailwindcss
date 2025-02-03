import React, { useState } from 'react';
import { Lightbulb, Car, Zap } from 'lucide-react';
import Navbar from './Navbar';

const projects = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
        title: 'Deloitte Building',
        location: 'London',
        category: 'LED Lighting'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7',
        title: 'Car Chargers',
        location: 'Oakland',
        category: 'Electric Mobility'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
        title: 'Amazon Headquarters',
        location: 'UK',
        category: 'LED Lighting'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
        title: 'AstraZeneca Lab Facilities',
        location: 'Nevada',
        category: 'LED Lighting'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8',
        title: "Gordon's BBQ",
        location: 'Las Vegas',
        category: 'Energy Efficiency'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1593941707266-ba46c44c915d',
        title: 'Car Chargers',
        location: 'Portugal',
        category: 'Electric Mobility'
    }
];

function Portfolio() {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeFilter, setActiveFilter] = useState(null);
    const itemsPerPage = 6;

    const filters = [
        { label: 'LED Lighting', icon: Lightbulb },
        { label: 'Energy Efficiency', icon: Zap },
        { label: 'Electric Mobility', icon: Car }
    ];

    const filteredProjects = activeFilter
        ? projects.filter(project => project.category === activeFilter)
        : projects;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

    const imageUrl = './images/carbg.svg';

    // Reset filter to show all projects
    const showAllProjects = () => {
        setActiveFilter(null);
        setCurrentPage(1);  // Reset to first page
    };

    return (
        <>
            <div className='w-full h-[590px]'>

                <div className='absolute w-full md:w-full lg:w-full'>
                    <Navbar Color="white" buttonOpacity={0.5}/>
                </div>
                <div className='lg:full bg-no-repeat bg-cover md:bg-cover md:w-full w-full md:h-[763px] h-[763px] lg:px-16 px-4' style={{ backgroundImage: `url(${imageUrl})` }}>

                    <div className='pt-[550px] md:h-[auto] text-[white]'>
                        <h1 className="text-[40px] text-400 leading-[48px]">Portfolio</h1>
                        <div className='md:w-[535px]'>
                            <p className="text-[18px] text-400 leading-[25px] mt-10">
                                Explore our portfolio of remarkable projects where innovation and sustainability converge.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full px-[50px]'>
                <div className='w-[400px] md:w-[700px] mt-[300px] px-4'>
                    <h1 className="text-[40px] text-400 leading-[48px]">Proudly helping businesses</h1>
                    <p className="text-[18px] text-400 leading-[25px] mt-10">
                        In a highly competitive industry, what distinguishes a company is not just its offerings but its unwavering commitment to excellence and innovation. At Oakland C.E., we understand that to rise above the competition, we must constantly strive for distinction in every aspect of our business. Our journey in the energy sector has been defined by innovation and expertise.
                    </p>
                    <div className="mt-10 text-[18px] text-400 leading-[25px] flex justify-between">
                        <div className='flex justify-center items-center'>
                            <img src="./images/invoation.svg" alt="" />
                            <span className='ml-2 text-[15px] md:text-[32px]'>Innovation</span>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src="./images/expertise.svg" alt="" />
                            <span className='ml-2 text-[15px] md:text-[32px]'>Expertise</span>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src="./images/quality.svg" alt="" />
                            <span className='ml-2 text-[15px] md:text-[32px]'>Quality</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full md:p-[100px] bg-[#F4F4F4] md:mt-[120px]'>
                <div className='w-full h-[1316px]'>
                    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
                        {/* Filter Buttons */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            <button
                                onClick={showAllProjects} // Show all projects
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors
                                    ${!activeFilter ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                            >
                                All
                            </button>
                            {filters.map(({ label, icon: Icon }) => (
                                <button
                                    key={label}
                                    onClick={() => setActiveFilter(activeFilter === label ? null : label)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors
                                        ${activeFilter === label
                                            ? 'bg-purple-600 text-white'
                                            : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                                >
                                    <Icon size={16} />
                                    {label}
                                </button>
                            ))}
                        </div>

                        {/* Project Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {currentItems.map((project) => (
                                <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <h3 className="text-white font-semibold">{project.title}</h3>
                                        <p className="text-gray-200 text-sm">{project.location}</p>
                                        <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-purple-500 text-white">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2 mt-8">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-8 h-8 rounded-full text-sm transition-colors
                                            ${currentPage === page
                                                ? 'bg-purple-600 text-white'
                                                : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Portfolio;
