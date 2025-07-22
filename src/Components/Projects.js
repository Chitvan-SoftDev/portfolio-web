import React from 'react'

function Projects({ data }) {
    let company_name= data.map((item)=>(item.company_name))
    company_name = [...new Set(company_name)];
    return (
        <div className='projects'>
            <h2 className='title-element'>Projects</h2>
            <div className="card text-center main-card">
                <div className="card-header p-0">
                    <ul className="nav nav-pills card-header-pills">
                        {
                            company_name.map((comp) => (
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">{comp}</a>
                                </li>
                            ))

                        }
                    </ul>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Projects