import React from 'react'
import './WorkExp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

export default function WorkExp({ data }) {
    return (
        <div className='work-exp' id='work-exp'>
            <h2 className='title-element'>Professional Experience</h2>

            <div className="accordion accordion-flush" id="accordionFlushExample">
                {
                    data.map((compData, index) =>
                    (<div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={`flush-heading${index}`}>
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#flush-collapse${index}`}
                                aria-expanded={index===0?'true':'false'}
                                aria-controls={`flush-collapse${index}`}
                            >
                                <p className='d-flex justify-content-between w-100 m-0 px-2'>

                                    <span>{compData.role} @ {compData.company_name}</span>
                                    <span className='d-md-block d-none'>{compData.tenure}</span>
                                </p>

                            </button>
                        </h2>
                        <div
                            id={`flush-collapse${index}`}
                            className= {`accordion-collapse collapse ${index===0?'show':''}`}
                            aria-labelledby={`flush-heading${index}`}
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body d-md-block d-none">
                                <div className='d-flex'>
                                    <div >
                                        <div className='d-flex location-url'>

                                            <div className='job-location'>
                                                <FontAwesomeIcon icon={faLocationDot} /> {compData.job_location}
                                            </div>
                                            <a className='company-web ms-2' href={compData.company_web} target='_blank'><FontAwesomeIcon icon={faSquareArrowUpRight} /> {compData.company_name}</a>
                                        </div>
                                        <div className='company-desc m-0 p-2'>
                                            <ul>

                                                {
                                                    compData.description.map((ele, ind) => (
                                                        <li key={ind}>
                                                            {ele}
                                                        </li>

                                                    ))
                                                }
                                            </ul>

                                        </div>
                                        <ul className='d-flex skill-list p-0'>

                                            {compData.skills.map((skill, skillIndex) => (

                                                <li key={skillIndex}>
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                    <div className='company-image' style={{ alignContent: 'center' }}>
                                        <img src={compData.image} width='200px' />
                                    </div>

                                </div>

                            </div>
                            {/* mobile collapsable menu starts */}

                            <div className="accordion-body d-md-none d-block">
                                <div className='d-flex flex-column'>
                                    <div className='company-image py-2' style={{ alignContent: 'center' }}>
                                        <img src={compData.image} width='200px' />
                                    </div>
                                    <div className=' py-2'>


                                        <div className='job-location'>
                                            <FontAwesomeIcon icon={faLocationDot} /> {compData.job_location}
                                        </div>
                                        <a className='company-web' href={compData.company_web} target='_blank'><FontAwesomeIcon icon={faSquareArrowUpRight} /> {compData.company_name}</a>

                                        {/* <p className='company-desc m-0 py-2'>{compData.description}</p> */}
                                        <div className='company-desc m-0 p-2'>
                                            <ul>

                                                {
                                                    compData.description.map((ele, ind) => (
                                                        <li key={ind}>
                                                            {ele}
                                                        </li>

                                                    ))
                                                }
                                            </ul>

                                        </div>
                                        <ul className='d-flex skill-list p-0'>

                                            {compData.skills.map((skill, skillIndex) => (

                                                <li key={skillIndex}>
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>

                                    </div>


                                </div>

                            </div>
                            {/* mobile collapsable menu ends */}

                        </div>



                    </div>
                    ))
                }

            </div>
        </div   >
    )
}