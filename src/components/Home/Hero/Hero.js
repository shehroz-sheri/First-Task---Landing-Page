import React from 'react'

export default function Hero() {
    return (
        <div>
            <div className='hero text-light'>
                <div className="container">
                    <div className="middle">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="container mt-5">
                                    <h1 className='fw-bold'>One Of The Biggest Market Makers</h1>
                                    <p>AlgoX capital is where you get access to the best new tokens before they list on other centralized or decentralized exchanges.</p>
                                    <button className="btn btn-warning px-4">CONNECT WALLET</button>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 text-center">
                                <div className='me-5 me-md-0' style={{ position: 'relative', top: '0', left: '0' }}>
                                    <img className='img-fluid backImg' src={require('../../../assets/images/heroGlobe.png')} alt="" />

                                    <img className='img-fluid upperImg' src={require('../../../assets/images/upperHeroImage.png')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
