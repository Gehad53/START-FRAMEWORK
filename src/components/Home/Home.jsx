import React from 'react'
import img from '../../Assets/Img/avataaars.svg'


export default function Home() {
  return <>
  <div className='home vh-100 d-flex justify-content-center align-items-center text-white' >
   <div className='text-center'>
    <img src={img} alt='' width={250} className='mb-3' />
    <app-star>
        <div className='text-center py-4 color'>
            <h2 className='fs-1 mb-3 fw-bolder'>START FRAMEWORK</h2>
            <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className='line me-3 background'></div>
            <i class="fa-solid fa-star"></i>
            <div className='line ms-3 background'></div>
            </div>
        </div>
    </app-star>
    <div>Graphic Artist - Web Designer - Illustrator</div>
   </div>
  </div>
  
  </>
}
