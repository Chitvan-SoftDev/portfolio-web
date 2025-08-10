import React from 'react'; // No useState needed here anymore for hover
import './Projects.css';

// ProjectCard now receives hover-related props from its parent
function ProjectCard({ project, isHovered, onMouseEnter, onMouseLeave }) {

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        transition: 'transform 0.3s ease-in-out',
        // Use the 'isHovered' prop to determine the transform
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    };

    return (
        <div className="col mb-4 project-card">
            <div className="card h-100"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                <div
                    className="card-image-wrapper"
                    // Use the passed-down event handlers
                    style={{ height: '200px', overflow: 'hidden' }}
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
                    {
                    // isHovered?<p className="card-text">Show Project</p>:
                    <p className="card-text">{project.description}</p>

                    }
                    {
                    project.url?<a href={project.url} target="_blank" className="btn btn-primary mt-auto show-project-button">Show Project</a>:null

                    }
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;