import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaGooglePlusG, FaXTwitter } from "react-icons/fa6";


export default function Footer() {
    return (
        <footer className='text-light'>
            <div className='pt-4 pb-1 pt-md-5'>
                <div className="container">
                    <div className='text-center text-md-start'>
                        <img className='img-fluid' src={require("../../assets/images/logo.png")} alt="AlgoX" />
                    </div>
                    <div className="row mt-2 px-2 px-md-0">
                        <div className="col-12 col-md-4 mb-4 my-md-0 px-1">
                            <p className='fs-6'>AlgoX is where you get access to the best new tokens before they list on other centralized or decentralized exchanges.</p>
                            <div className='text-center text-md-start'>
                                <span className='me-1 me-md-2'>
                                    <Link className='social_icons'>
                                        <span className='rounded-circle bg-warning' style={{ padding: '5px 9.5px 9px 9.5px' }}>
                                            <FaFacebookF size={'18'} color='#FFF2CC' />
                                        </span>
                                    </Link>
                                </span>
                                <span className='me-1 me-md-2'>
                                    <Link className='social_icons'>
                                        <span className='rounded-circle bg-warning' style={{ padding: '5px 9.5px 9px 9.5px' }}>
                                            <FaXTwitter size={'18'} color='#FFF2CC' />
                                        </span>
                                    </Link>
                                </span>
                                <span className='me-1 me-md-2'>
                                    <Link className='social_icons'>
                                        <span className='rounded-circle bg-warning' style={{ padding: '5px 9.5px 9px 9.5px' }}>
                                            <FaGooglePlusG size={'18'} color='#FFF2CC' />
                                        </span>
                                    </Link>
                                </span>
                                <span className='me-1 me-md-2'>
                                    <Link className='social_icons'>
                                        <span className='rounded-circle bg-warning' style={{ padding: '5px 9.5px 9px 9.5px' }}>
                                            <FaYoutube size={'18'} color='#FFF2CC' />
                                        </span>
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 footer_links px-md-4 mb-4 mt-2 m-md-0">
                            <div className="row mb-1">
                                <div className="col">
                                    <Link className='footer_link'>AlgoX capital</Link>
                                </div>
                                <div className="col">
                                    <Link className='footer_link'>More</Link>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col">
                                    <Link className='footer_link'>Exchange</Link>
                                </div>
                                <div className="col">
                                    <Link className='footer_link'>Algorithmic Trading</Link>
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col">
                                    <Link className='footer_link'>FAQs</Link>
                                </div>
                                <div className="col">
                                    <Link className='footer_link'>Market Making</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-3 mb-md-0 px-1">
                            <h5>Newsletter</h5>
                            <p className='text-secondary'>Keep up to date with our progress. Subscribe for e-mail updates.</p>
                            <div className='w-75'>
                                <div className="mt-auto d-flex flex-wrap justify-content-between border-bottom pb-1">
                                    <div className='mt-auto'>
                                        <input className='my-auto bg-transparent text-white' color='white' style={{ border: 'none', outline: 'none', borderBottom: '0px solid' }} type="email" name="" id="" placeholder='Your email address' />
                                    </div>
                                    <div className=''>
                                        <button className="btn bg-warning text-end">Subscribe</button>
                                    </div>
                                </div>
                                <div className="col">
                                </div>
                                {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                            </div>
                        </div>
                    </div>
                    <p className='text-center my-3'>&copy; All rights reserved by <Link to={'#'} className='brand_name'>AlgoX</Link></p>
                </div>
            </div>
        </footer>
    )
}
