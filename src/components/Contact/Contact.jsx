import React from 'react'

export default function Contact() {
  return<>
  <app-contact>
    <div className='mb-4'>
      <div className="container pt-3">
      <app-star title="portfolio component">
        <div className='text-center pt-4 colorr'>
            <h2 className='fs-1 mb-3 fw-bolder'>CONATCT SECTION</h2>
            <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className='line me-3 backgroundd'></div>
            <i class=" fa-solid fa-star"></i>
            <div className='line ms-3 backgroundd'></div>
            </div>
        </div>
    </app-star>
    <form className='w-50 p-3 mx-auto'>
     <label for="userName" className='position-relative top-0 __top'>userName:</label>
     <input id='userName' type='text' placeholder='userName' name='userName' className='form-control border-0 border-bottom py-3 position-relative' />
     <label for="userAge" className='position-relative top-0 __top'>userAge:</label>
     <input id='userAge' type='text' placeholder='userAge' name='userAge' className='form-control border-0 border-bottom py-3 position-relative' />
     <label for="userEmail" className='position-relative top-0 __top'>userEmail:</label>
     <input id='userEmail' type='email' placeholder='userEmail' name='userEmail' className='form-control border-0 border-bottom py-3 position-relative' />
     <label for="userPassword" className='position-relative top-0 __top'>userPassword:</label>
     <input id='userPassword' type='password' placeholder='userPassword' name='userPassword' className='form-control border-0 border-bottom py-3 position-relative' />
     <button className='btn buttonn mt-4 text-white'>send Message</button>
    </form>
      </div>
    </div>
  </app-contact>
  
  </>
}
