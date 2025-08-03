import React, { useState, useEffect } from 'react'; 
import './Projects.css'; 
import ProjectCard from './ProjectCard';

function Projects({ data }) {

    let company_name = data.map((item) => item.company_name);
    company_name = [...new Set(company_name)];


    const [activeTab, setActiveTab] = useState('All'); // Start with 'All' as default


    const [filteredData, setFilteredData] = useState([]);
    // const [isImageHovered, setIsCardHovered] = useState(false);
    // New state for centralized hover tracking
    // Stores the index of the currently hovered card, or null if none
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
    useEffect(() => {
        if (activeTab === 'All') {
            setFilteredData(data); // Show all data if 'All' tab is active
        } else {
            setFilteredData(data.filter(item => item.company_name === activeTab));
        }
        // When filteredData changes, reset the hover state
        setHoveredCardIndex(null);
    }, [activeTab, data]); // Re-run effect if activeTab or data changes

    // Event handler for tab clicks
    const handleTabClick = (compName) => {
        setActiveTab(compName);
    };

    return (
        <div className='projects'>
            <h2 className='title-element'>Projects</h2>
            <div className="card text-center main-card">
                <div className="card-header border-bottom-0 p-0">
                    <ul className="nav nav-pills card-header-pills justify-content-left"> 
                        <li className="nav-item ms-3"> <a className='nav-link'> Filter By </a></li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${activeTab === 'All' ? 'active' : ''}`}
                                onClick={() => handleTabClick('All')}
                                // href="#"
                                type="button"
                                role="tab"
                                aria-selected={activeTab === 'All'}
                            >
                            All Projects
                            </a>
                        </li>

                        {/* Company Name Tabs */}
                        {company_name.map((comp) => (
                            <li className="nav-item" key={comp}> {/* Use comp as key */}
                                / <a
                                    className={`nav-link d-inline-block ${activeTab === comp ? 'active' : ''}`}
                                    onClick={() => handleTabClick(comp)}
                                    // href="#"
                                    type="button"
                                    role="tab"
                                    aria-selected={activeTab === comp}
                                >
                                    {comp}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='row p-4'>
                    {filteredData.map((ele, index) => (
                        <ProjectCard
                            key={ele.id || index} // Use a unique ID if available, otherwise index
                            project={ele}
                            // Pass down the current hover index and updater functions
                            isHovered={hoveredCardIndex === index}
                            onMouseEnter={() => setHoveredCardIndex(index)}
                            onMouseLeave={() => setHoveredCardIndex(null)}
                        />
                    ))}
                    {filteredData.length === 0 && (
                        <div className="col-12 text-center mt-5">
                            <p>No projects found for this company.</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Projects;