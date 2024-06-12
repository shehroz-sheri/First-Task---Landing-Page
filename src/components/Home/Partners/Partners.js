import React from 'react'
import PartComp from './PartComp'

export default function Partners() {
    return (
        <section className='partner_section'>
            <div className='my-5 text-center'>
                <div className="mb-3 mb-md-5">
                    <h2 className='fw-bolder'><span className='text-info'>Our</span> <span className='text-warning'>Partners</span></h2>
                    <p>What are we doing one of the biggest market makers in the market.</p>
                </div>
                <div className="partners">
                    <div className='container' style={{ background: 'rgba(0, 0, 0, 0.70)' }}>
                    </div>
                    <div className="row partner_imgs pb-4 pt-4 text-light partn">
                        <div className="col-12 col-sm-6">
                            <div className="row d-flex">
                                <div className='col text-center'>
                                    <img className='img-fluid' src={require('../../../assets/images/bybit.png')} alt="" />
                                    <p className='text-center'>Bybit</p>
                                </div>
                                <div className='text-center col'>
                                    <img className='img-fluid' src={require('../../../assets/images/nexo.png')} alt="" />
                                    <p className='text-center'>Nexo</p>
                                </div>
                                <div className='text-center col'>
                                    <img className='img-fluid' src={require('../../../assets/images/crypto.png')} alt="" />
                                    <p className='text-center'>Crypto</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="row">
                                <div className='text-center col'>
                                    <img className='img-fluid' src={require('../../../assets/images/bybit.png')} alt="" />
                                    <p className='text-center'>Bybit</p>
                                </div>
                                <div className='text-center col'>
                                    <img className='img-fluid' src={require('../../../assets/images/nexo.png')} alt="" />
                                    <p className='text-center'>Nexo</p>
                                </div>
                                <div className='text-center col'>
                                    <img className='img-fluid' src={require('../../../assets/images/crypto.png')} alt="" />
                                    <p className='text-center'>Crypto</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
