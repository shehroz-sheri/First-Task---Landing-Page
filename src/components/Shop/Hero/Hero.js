import React from 'react'

export default function Hero() {
  return (
    <>
      <div>
        <div className='hero text-light'>
          <div className="container">
            <div className="middle">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="container mt-5 text-center">
                    <h1 className='fw-bolder pt-4 animate__animated animate__zoomIn'>Shop And Subscription</h1>
                  </div>
                </div>
                <div className="col-12 col-md-6 text-end">
                  <div className='me-5 me-md-0 text-center text-md-end' style={{ position: 'relative', top: '0', left: '0' }}>
                    <img className='img-fluid heroImg' src={require('../../../assets/images/Shop/hero-img.png')} alt="Globe" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
