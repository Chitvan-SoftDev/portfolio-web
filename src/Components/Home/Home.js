import React from 'react'
import './Home.css'

function Home({ data }) {
    return (
        <div className='home'>
            <h1 className='name-element text-center'>Chitvan Singhal</h1>
            <h5 className='title-element text-center'>{data.designation}</h5>
            <p className='w-50 text-center'>

                <span className='html-element float-start'>&lt;p&gt;</span>
                <br></br>
                {data.introduction}
                <br></br>
                <span className='html-element float-start'>&lt;/p&gt;</span>

            </p>
            <div className="container_mouse">
                <span className="mouse-btn">
                    <span className="mouse-scroll"></span>
                </span>
            </div>
        </div>
    )
}

export default Home