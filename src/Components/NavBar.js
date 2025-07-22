import React from 'react'

function NavBar() {
  return (
    <div className='w-100'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid row">
          <div className='col-lg-3'>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">ChitvanSinghal</a>

          </div>


          <div className="collapse navbar-collapse col-lg-9" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active d-flex flex-column" aria-current="page" href="#"><span className='text-end'>01</span>// home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex flex-column" href="#"><span className='text-end'>02</span>// expertise</a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex flex-column" href="#"><span className='text-end'>03</span>// work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex flex-column" href="#"><span className='text-end'>04</span>// experience</a>
              </li><li className="nav-item">
                <a className="nav-link d-flex flex-column" href="#"><span className='text-end'>05</span>// contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar