import React from 'react'
import img1 from '../../Assets/Img/poert1.png'
import img2 from '../../Assets/Img/port2.png'
import img3 from '../../Assets/Img/port3.png'
export default function Portfolio() {
  return <>
  <app-portfolio className='vh-100'>
    <div className='mb-4'>
    <div className='pt-4'>
    <app-star title="portfolio component">
        <div className='text-center pt-4 colorr'>
            <h2 className='fs-1 mb-3 fw-bolder'>PORTFOLIO COMPONENT</h2>
            <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className='line me-3 backgroundd'></div>
            <i class="fa-solid fa-star"></i>
            <div className='line ms-3 backgroundd'></div>
            </div>
        </div>
    </app-star>
    <div className='container'>
      <div className="row g-5 m-auto">
       <div className="col-lg-4 col-md-6">
        <div className='rounded-3 overflow-hidden position-relative'>
          <img src={img1} alt="" className='w-100 rounded-3' />
          <div className='layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
          <i class="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
       </div>
       <div className="col-lg-4 col-md-6">
        <div className='rounded-3 overflow-hidden position-relative'>
          <img src={img2} alt="" className='w-100 rounded-3' />
          <div className='layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
          <i class="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
       </div>
       <div className="col-lg-4 col-md-6">
        <div className='rounded-3 overflow-hidden position-relative'>
          <img src={img3} alt="" className='w-100 rounded-3' />
          <div className='layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
          <i class="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
       </div>
       <div className="col-lg-4 col-md-6">
        <div className='rounded-3 overflow-hidden position-relative'>
          <img src={img1} alt="" className='w-100 rounded-3' />
          <div className='layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
          <i class="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
       </div>
       <div className="col-lg-4 col-md-6">
        <div className='rounded-3 overflow-hidden position-relative'>
          <img src={img2} alt="" className='w-100 rounded-3' />
          <div className='layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
          <i class="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
       </div>
       <div className="col-lg-4 col-md-6">
        <div className='rounded-3 overflow-hidden position-relative'>
          <img src={img3} alt="" className='w-100 rounded-3' />
          <div className='layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
          <i class="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
       </div>

      </div>
    </div>
    </div>
    </div>
    <div class="model__ position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center d-none">
      <img alt="" src={img3} />

    </div>
  </app-portfolio>
  </>
}
