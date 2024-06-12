import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AlgoTrading(props) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <>
            <div className='my-1'>
                <h2 className='fw-bolder text-info text-center my-5'>{props.title}</h2>
                <div className="container bg-info rounded py-4">
                    <div>
                        <div className="container">
                        </div>
                        <div className="d-flex flex-wrap justify-content-around">
                            <div style={{ height: 'max-content' }} className="mt-3 mt-md-5">
                                <div className='border mt-3 rounded-4 py-3 bg-black border-warning border-2'>
                                    <div className="container">
                                        <div className='row'>
                                            <div className='col-12 col-md-4 text-center'>
                                                <img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{cursor: 'pointer'}} className='img-fluid h-100' src={require('../../../assets/images/Shop/card-img.png')} alt="" />
                                            </div>
                                            <div className='px-4 py-2 col-12 col-md-8'>
                                                <div className="d-flex flex-wrap">
                                                    <Link onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='h4 text-warning card_title m-0'>Starter</Link>
                                                    <p className='ms-auto text-light fw-semibold p-0 m-0'>Binary weekly crap</p>
                                                </div>
                                                <div className='d-flex justify-content-end'>
                                                    <p className='text-light p-0 m-0'>35,00%</p>
                                                </div>
                                                <div>
                                                    <p className='text-light fw-semibold pt-0 mt-0'>100 - 500 USD</p>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-12 col-md-7 my-1 my-md-0'>
                                                        <button className="btn btn-warning px-3 w-100">Purchase</button>
                                                    </div>
                                                    <div className='col-12 col-md-5 my-1 my-md-0'>
                                                        <button className="btn btn-outline-warning px-3 w-100">Withdraw</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={isHovering ? 'visible algoHide' : 'invisible algoHide'}>
                                <p className='text-light my-3 my-md-2 fs-3'>Starter</p>
                                <div className='border rounded-4 border-2 border-warning bg-black p-4'>
                                    <div className="container">
                                        <div>
                                            <h5 className='text-warning'>Stacking Hub Details</h5>
                                            <div>
                                                <img src={require('../../../assets/images/Shop/tick-icon.png')} width={'16rem'} className='img-fluid' alt="" />
                                                <span style={{ fontSize: '0.85rem' }} className='text-light px-3'>Stack Ratio 1.O</span>
                                            </div>
                                            <div>
                                                <img src={require('../../../assets/images/Shop/tick-icon.png')} width={'16rem'} className='img-fluid' alt="" />
                                                <span style={{ fontSize: '0.85rem' }} className='text-light px-3'>Auto Stack ON: 0.2% Daily Reward</span>
                                            </div>
                                            <div>
                                                <img src={require('../../../assets/images/Shop/tick-icon.png')} width={'16rem'} className='img-fluid' alt="" />
                                                <span style={{ fontSize: '0.85rem' }} className='text-light px-3'>Auto Stack OFF : Up to 0.1% Daily Rewards</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className='text-warning'>Bonuses</h5>
                                            <div>
                                                <img src={require('../../../assets/images/Shop/tick-icon.png')} width={'16rem'} className='img-fluid' alt="" />
                                                <span style={{ fontSize: '0.85rem' }} className='text-light px-3'>7% Direct Bonus</span>
                                            </div>
                                            <div>
                                                <img src={require('../../../assets/images/Shop/tick-icon.png')} width={'16rem'} className='img-fluid' alt="" />
                                                <span style={{ fontSize: '0.85rem' }} className='text-light px-3'>10% Binary Bonus</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className='text-warning'>Bonuses</h5>
                                            <div>
                                                <img src={require('../../../assets/images/Shop/tick-icon.png')} width={'16rem'} className='img-fluid' alt="" />
                                                <span style={{ fontSize: '0.85rem' }} className='text-light px-3'>7% Direct Bonus</span>
                                            </div>
                                            <div>
                                                <img src={require('../../../assets/images/Shop/tick-icon.png')} width={'16rem'} className='img-fluid' alt="" />
                                                <span style={{ fontSize: '0.85rem' }} className='text-light px-3'>10% Binary Bonus</span>
                                            </div>
                                        </div>
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
