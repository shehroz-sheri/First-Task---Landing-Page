import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillGooglePlusCircle } from "react-icons/ai";


export default function Footer() {
    return (
        <footer className='text-light'>
            <div className='pt-4 pb-1 pt-md-5'>
                <div className="container">
                    <div className='text-center text-md-start'>
                        <img className='img-fluid' src={require("../../assets/images/logo.png")} alt="AlgoX" />
                    </div>
                    <div className="row mt-2">
                        <div className="col-12 col-md-4 mb-4 my-md-0 px-1">
                            <p className='fs-6'>AlgoX is where you get access to the best new tokens before they list on other centralized or decentralized exchanges.</p>
                            <div className='text-center text-md-start'>
                                <span className='me-1'>
                                    <Link className='text-warning'>
                                        <FaFacebook size={'34'} />
                                        {/* <img className='img-fluid me-2' src={require('../../assets/images/fb.png')} alt="" /> */}
                                    </Link>
                                </span>
                                <span className='me-1'>
                                    <Link className='text-warning'>
                                        <FaSquareXTwitter size={'34'} />
                                        {/* <img className='img-fluid me-2' src={require('../../assets/images/twitter.png')} alt="" /> */}
                                    </Link>
                                </span>
                                <span className='me-1'>
                                    <Link className='text-warning'>
                                        <AiFillGooglePlusCircle size={'34'} />
                                        {/* <img className='img-fluid me-2' src={require('../../assets/images/google.png')} alt="" /> */}
                                    </Link>
                                </span>
                                <span className='me-1'>
                                    <Link className='text-warning'>
                                        <FaYoutube size={'34'} />
                                        {/* <img className='img-fluid me-2' src={require('../../assets/images/yt.png')} alt="" /> */}
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
                            <div className='row'>
                                <div className="col">
                                    <input className='form-control border-none outline-none bg-transparent text-white' color='white' style={{ border: 'none', outline: 'none', borderBottom: '1px solid' }} type="text" name="" id="" placeholder='Your email address' />
                                </div>
                                <div className="col">
                                    <button className="btn bg-warning">Subscribe</button>
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
