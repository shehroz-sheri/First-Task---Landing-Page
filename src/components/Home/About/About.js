import React from 'react'
import AboutImg from '../../../assets/images/about.png'

export default function About() {
    return (
        <div className='about'>
            <div className='mb-5 pt-5'>
                <div className='text-center mb-4 mb-md-5'>
                    <div className="container">
                        <div className="row">
                        <h2 className='fw-bolder'><span className='text-info'>About</span> <span className='text-warning'>Us</span></h2>
                        <div className='col-md-8 offset-md-2'>
                        <p className='text-info'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="container mb-3 mt-5">
                    <div className="row">
                        <div className="col-12 col-md-5 my-auto">
                            <h3 className='text-info fw-bold'>Enjoy</h3>
                            <p className='text-info'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className="col-12 col-md-2"></div>
                        <div className="col-12 col-md-5 text-center">
                            <img className='img-fluid w-100' src={require('../../../assets/images/about.png')} alt="" />
                        </div>
                    </div>
                </div>
                <div className="container my-3">
                    <div className="row flex-wrap-reverse">
                        <div className="col-12 col-md-5 text-center">
                            <img className='img-fluid w-100' src={require('../../../assets/images/about.png')} alt="" />
                        </div>
                        <div className="col-12 col-md-2"></div>
                        <div className="col-12 col-md-5 my-auto">
                            <h3 className='text-info fw-bold'>Connecting</h3>
                            <p className='text-info'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
