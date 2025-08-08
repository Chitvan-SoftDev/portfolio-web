import React from 'react'
import './MyExpertise.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function MyExpertise({ data }) {

    return (
        <div className='my-expertise' id='my-expertise'>
            <h2 className='title-element'>My Expertise</h2>
            <div className='d-flex flex-md-row flex-column justify-content-center exp-cards'>
                {
                    data.map((ele, index) => (
                        <div className="card" style={{ width: '18rem' }} key={index}>

                            <div className="card-body">
                                <h3 className="card-title d-flex">
                                    <div className='flex-grow-1 align-content-center '>
                                        <FontAwesomeIcon  icon={ele.icon} size='2x' pull='left' />
                                    </div>
                                    <div>{ele.title}</div>

                                    
                                </h3>
                                {/* <h6 className="card-subtitle mb-5"><span className='float-start'>{ele.role}</span><span className='float-end'>{ele.tenure}</span></h6> */}
                                {/* <ul type='disc'>
                                   { ele.description.map((desc,id) => (
                                        <li className="card-text" key={id}>{desc}</li>

                                    ))}
                                </ul> */}
                                <div className='d-flex flex-row'>
                                    <div className='d-flex flex-column box '>
                                        <span className='html-element float-start'>&lt;h3&gt;</span>

                                        <div className='vr text-center flex-grow-1'>

                                        </div>
                                        <span className='html-element float-start'>&lt;h3&gt;</span>

                                    </div>
                                    <div className='box'>

                                        <p className="card-text py-3">{ele.description}</p>
                                    </div>
                                </div>

                                {/* <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a> */}
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default MyExpertise