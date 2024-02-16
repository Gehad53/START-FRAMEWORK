import React from 'react'

export default function About() {



  return  <>
 <div className='about text-white d-flex justify-content-center align-items-center vh-100'>
  <div>
  <app-star>
        <div className='text-center pt-4 color'>
            <h2 className='fs-1 mb-3 fw-bolder'>ABOUT COMPONENT</h2>
            <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className='line me-3 background'></div>
            <i class="fa-solid fa-star"></i>
            <div className='line ms-3 background'></div>
            </div>
        </div>
    </app-star>
    <div className='container'>
      <div className="row px-5">
        <div className="col-md-6 pe-5">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-6 pe-5">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </div>
  </div>
 </div>
    </>
  
}
