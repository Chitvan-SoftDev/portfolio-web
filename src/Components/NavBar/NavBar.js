import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

// Assuming this file exists and contains your custom styles
import './NavBar.css'; 
// To make this work with your original Bootstrap classes, you need to ensure
// Bootstrap's CSS and JS are loaded in your project's index.html file.

// This is your original NavBar component with the styling restored.
function NavBar() {
  // This is a custom function to handle the scrolling behavior.
  // It is passed to the 'scroll' prop of the HashLink.
  const handleScroll = (element) => {
    // Find the offcanvas element by its ID
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    if (offcanvasElement && window.bootstrap) {
      // Get the Offcanvas instance and hide it
      const offcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvas) {
        offcanvas.hide();
      }
    }

    // Wait for the offcanvas transition to complete before scrolling.
    // The delay should be slightly longer than the Bootstrap offcanvas transition time.
    setTimeout(() => {
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 350); // 350ms delay to ensure the offcanvas is closed
  };

  return (
    <div className='w-100'>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid row">
          {/* Column for Brand and Toggler */}
          <div className='col-lg-3 d-flex align-items-center'> 
            <button
              className="navbar-toggler me-2" 
              type="button"
              data-bs-toggle="offcanvas" 
              data-bs-target="#offcanvasNavbar" 
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to="/#">ChitvanSinghal</Link>
          </div>

          {/* Original Menu for Large Screens */}
          <div className="collapse navbar-collapse col-lg-9" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link smooth className="nav-link active d-flex flex-column" aria-current="page" to="/#">
                  <span className='text-end'>01</span>// home
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth className="nav-link d-flex flex-column" to="#my-expertise">
                  <span className='text-end'>02</span>// expertise
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth className="nav-link d-flex flex-column" to="#projects">
                  <span className='text-end'>03</span>// work
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth className="nav-link d-flex flex-column" to="#work-exp">
                  <span className='text-end'>04</span>// experience
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* OFF CANVAS MENU Markup for Small Screens */}
      <div
        className="offcanvas offcanvas-start text-bg-dark"
        tabIndex="-1"
        id="offcanvasNavbar" 
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close btn-close-white" 
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-start flex-grow-1 pe-3"> 
            <li className="nav-item">
              <Link scroll={handleScroll} className="nav-link active d-flex flex-column" aria-current="page" to="/#">
                <span className='text-end'>01</span>// home
              </Link>
            </li>
            <li className="nav-item">
              <Link scroll={handleScroll} className="nav-link d-flex flex-column" to="#my-expertise">
                <span className='text-end'>02</span>// expertise
              </Link>
            </li>
            <li className="nav-item">
              <Link scroll={handleScroll} className="nav-link d-flex flex-column" to="#projects">
                <span className='text-end'>03</span>// work
              </Link>
            </li>
            <li className="nav-item">
              <Link scroll={handleScroll} className="nav-link d-flex flex-column" to="#work-exp">
                <span className='text-end'>04</span>// experience
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar