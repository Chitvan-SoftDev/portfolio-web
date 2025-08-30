import React from 'react'
import './Home.css'

function Home({ data }) {
    return (
        <div className='home d-flex flex-column'>
            <h1 className='name-element text-center'>Chitvan Singhal</h1>
            <h5 className='title-element text-center'>{data.designation}</h5>
            <p className='w-md-50 w-75' style={{textAlign:'justify'}}>

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

        // <div className='home container'>
        //     <div className='col-12'>
        //         <div className='row h-25'>
        //             <h1 className='name-element text-center'>Chitvan Singhal</h1>

        //         </div>
        //         <div className='row h-18'>
        //             <h5 className='title-element text-center'>{data.designation}</h5>
        //         </div>
        //         <div className='row h-25'>
        //             <p className='w-md-50 w-75 text-center'>

        //                 <span className='html-element float-start'>&lt;p&gt;</span>
        //                 <br></br>
        //                 {data.introduction}
        //                 <br></br>
        //                 <span className='html-element float-start'>&lt;/p&gt;</span>

        //             </p>
        //         </div>
        //         <div className='row h-10'>
        //             <div className="container_mouse">
        //                 <span className="mouse-btn">
        //                     <span className="mouse-scroll"></span>
        //                 </span>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Home