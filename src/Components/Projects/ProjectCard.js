import React, { useState, useEffect } from 'react';
import './Projects.css';

function ProjectCard({ project }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isCursorDevice, setIsCursorDevice] = useState(false);

    useEffect(() => {
        const onMouseMove = () => {
            setIsCursorDevice(true);
            window.removeEventListener('mousemove', onMouseMove);
        };
        
        window.addEventListener('mousemove', onMouseMove);
        
        // Cleanup function to remove the event listener
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    const handleMouseEnter = () => {
        if (isCursorDevice) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (isCursorDevice) {
            setIsHovered(false);
        }
    };

    // The scale value now depends on both `isHovered` and `isCursorDevice`
    const scaleValue = isCursorDevice ? (isHovered ? '1.0' : '0.9') : '1.0';

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        transition: 'transform 0.3s ease-in-out',
        transform: `scale(${scaleValue})`,
        background: '#fff',
    };

    return (
        <div className="col mb-4 project-card">
            <div
                className="card h-100"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className="card-image-wrapper"
                    style={{ height: '300px', overflow: 'hidden' }}
                >
                    <img
                        src={project.image}
                        className="card-img-top"
                        alt={project.title || "Card image"}
                        style={imageStyle}
                    />
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    {project.url && (
                        <a href={project.url} target="_blank" className="btn btn-primary mt-auto show-project-button">
                            Show Project
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;