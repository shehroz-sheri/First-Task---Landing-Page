import { Popover } from 'antd';
import React from 'react'
import { Slide } from "react-awesome-reveal";

export default function Hero() {
    const wallet = (
        <div>
            <div className="my-2 my-md-3">
                <div className="d-flex gap-1 justify-content-center">
                    <div className="text-center text-info">
                        <h4 className='fw-semibold'>Connect Wallet</h4>
                        <p className='my-2 mb-md-4'>Start by connecting with us click below and start now</p>
                        <div className="d-flex justify-content-center">
                            <div className="mx-1 mx-md-0">
                                <img src={require('../../../assets/images/connect-wallet.png')} className='img-fluid connect_wallet_masks_imgs' alt="" />
                                <p style={{ fontSize: '0.8em' }} className='mt-1 text-black'>Meta Mask</p>
                            </div>
                            <div className="mx-1 mx-md-0">
                                <img src={require('../../../assets/images/connect-wallet.png')} className='img-fluid connect_wallet_masks_imgs' alt="" />
                                <p style={{ fontSize: '0.8em' }} className='mt-1 text-black'>Meta Mask</p>
                            </div>
                            <div className="mx-1 mx-md-0">
                                <img src={require('../../../assets/images/connect-wallet.png')} className='img-fluid connect_wallet_masks_imgs' alt="" />
                                <p style={{ fontSize: '0.8em' }} className='mt-1 text-black'>Meta Mask</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="mx-1 mx-md-0">
                                <img src={require('../../../assets/images/connect-wallet.png')} className='img-fluid connect_wallet_masks_imgs' alt="" />
                                <p style={{ fontSize: '0.8em' }} className='mt-1 text-black'>Meta Mask</p>
                            </div>
                            <div className="mx-1 mx-md-0">
                                <img src={require('../../../assets/images/connect-wallet.png')} className='img-fluid connect_wallet_masks_imgs' alt="" />
                                <p style={{ fontSize: '0.8em' }} className='mt-1 text-black'>Meta Mask</p>
                            </div>
                            <div className="mx-1 mx-md-0">
                                <img src={require('..//../../assets/images/connect-wallet.png')} className='img-fluid connect_wallet_masks_imgs' alt="" />
                                <p style={{ fontSize: '0.8em' }} className='mt-1 text-black'>Meta Mask</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className='d-flex flex-column justify-content-between h-100 bg-info rounded-2 pt-4 pb-2'>
                            <div>
                                <h5 className='text-warning fw-semibold text-center'>Haven't got a wallet yet?</h5>
                            </div>
                            <div className="container text-center">
                                <img src={require('../../../assets/images/crypto-img.png')} className='img-fluid connect_wallet_img' alt="" />
                            </div>
                            <div className='container text-center'>
                                <button className="btn btn-sm btn-warning text-center px-md-5 px-2 mt-3">Learn How to Connect</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <div className='hero text-light'>
                <div className="container">
                    <div className="middle">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="container mt-5">
                                    <Slide direction='up'>
                                        <h1 className='fw-bolder'>One Of The Biggest Market Makers</h1>
                                    </Slide>
                                    <p>AlgoX capital is where you get access to the best new tokens before they list on other centralized or decentralized exchanges.</p>
                                    <Popover content={wallet} trigger="click">
                                        <button className="btn mx-2 btn-warning px-3">CONNECT WALLET</button>
                                    </Popover>
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
