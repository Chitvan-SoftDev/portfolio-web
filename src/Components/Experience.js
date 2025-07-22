import React from 'react'

function Experience({ data }) {
    for(let workEx of data){
        workEx.description=workEx.description.split("\n");
    }

    return (
        <div className='experience'>
            <h2 className='title-element'>Work Experience</h2>
            <div className='d-flex flex-lg-row justify-content-center exp-cards'>
                {
                    data.map((ele, index) => (
                        <div className="card" style={{ width: '18rem' }} key={index}>

                            <div className="card-body">
                                <h5 className="card-title">{ele.company_name}</h5>
                                <h6 className="card-subtitle mb-5"><span className='float-start'>{ele.role}</span><span className='float-end'>{ele.tenure}</span></h6>
                                <ul type='disc'>
                                   { ele.description.map((desc,id) => (
                                        <li className="card-text" key={id}>{desc}</li>

                                    ))}
                                </ul>
                                {/* <p className="card-text">{ele.description}</p> */}
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

export default Experience