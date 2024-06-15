import React from 'react'
import { Link } from 'react-router-dom'
import { GoBell } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";
import { Popover, Switch } from 'antd';
import { useAuth } from '../../context/AuthContext';


export default function Navbar() {
    const { user, logoutUser } = useAuth()

    const handleUserLogout = () => {
        logoutUser('loggedOut')
    }

    const notify = (
        <div>
            <div className="container mt-3">
                <h4 className='text-center'>Notifications</h4>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="dropdown">
                            <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="me-2">All</span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><Link className="dropdown-item" href="#">Products</Link></li>
                                <li><Link className="dropdown-item" href="#">Promotions</Link></li>
                                <li><Link className="dropdown-item" href="#">Farms</Link></li>
                                <li><Link className="dropdown-item" href="#">Rewards</Link></li>
                                <li><Link className="dropdown-item" href="#">Alerts</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className='text-end mb-3'>
                            <Switch size="small" defaultChecked /> Important
                        </div>
                        <img src={require('../../assets/images/bell.png')} className='img-fluid notify_img' alt="bell" />
                    </div>
                </div>
                <div className="text-center">
                    <h5>Empty</h5>
                    <p className='fw-semibold'>Notifications at the moment</p>
                </div>
            </div>
        </div>
    );

    const settings = (
        <div>
            <div className="container my-3">
                <h4 className='text-center'>Settings</h4>
                <div className="my-3">
                    <div>
                        <div className="row settings_item my-1 rounded py-2">
                            <div className="col-10">
                                <div>
                                    <img src={require('../../assets/images/box.png')} className='img-fluid' style={{ width: '2em' }} alt="" />
                                    <span className='fw-semibold mx-2'>Products</span>
                                </div>
                                <p className='pb-0 mb-0' style={{ fontSize: '12px' }}>Lorem ipsum dolor sit amet. Fuga odit duc laudantium dit </p>
                            </div>
                            <div className="col-2 my-auto">
                                <Switch defaultChecked />
                            </div>
                        </div>
                        <hr className='p-0 m-0' />
                    </div>
                </div>
            </div>
        </div>
    );

    const globe = (
        <div>
            <div className="container my-4">
                <button className="btn btn-warning">Coming Soon</button>
            </div>
        </div>
    );

    const wallet = (
        <div>
            <div className="my-2 my-md-3">
                <div className="d-flex gap-1 justify-content-center">
                    <div className="text-center text-info">
                        <h4 className='fw-semibold'>Connect Wallet</h4>
                        <p className='my-2 mb-md-4'>Start by connecting with us click below and start now</p>
                        <div className="d-flex justify-content-center">
                            <div className="mx-1 mx-md-0">
                                <img src={require('../../assets/images/connect-wallet.png')} className='img-fluid connect_wallet_masks_imgs' alt="" />
                                <p style={{ fontSize: '0.8em' }} className='mt-1 text-black'>Meta Mask</p>
                            </div>
                            <div className="mx-1 mx-md-0">
                                <img src={require('../../assets/images/connect-wallet.png')} className='img-fluid connect_wallet_masks_imgs' alt="" />
                                <p style={{ fontSize: '0.8em' }} className='mt-1 text-black'>Meta Mask</p>
                            </div>
                            <div className="mx-1 mx-md-0">
                                <img src={require('../../assets/images/connect-wallet.png')} className='img-fluid connect_wallet_masks_imgs' alt="" />
                                <p style={{ fontSize: '0.8em' }} className='mt-1 text-black'>Meta Mask</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="mx-1 mx-md-0">
                                <img src={require('../../assets/images/connect-wallet.png')} className='img-fluid connect_wallet_masks_imgs' alt="" />
                                <p style={{ fontSize: '0.8em' }} className='mt-1 text-black'>Meta Mask</p>
                            </div>
                            <div className="mx-1 mx-md-0">
                                <img src={require('../../assets/images/connect-wallet.png')} className='img-fluid connect_wallet_masks_imgs' alt="" />
                                <p style={{ fontSize: '0.8em' }} className='mt-1 text-black'>Meta Mask</p>
                            </div>
                            <div className="mx-1 mx-md-0">
                                <img src={require('../../assets/images/connect-wallet.png')} className='img-fluid connect_wallet_masks_imgs' alt="" />
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
                                <img src={require('../../assets/images/crypto-img.png')} className='img-fluid connect_wallet_img' alt="" />
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
    // const wallet = (
    //     <div>
    //         <div className="container my-2 my-md-3 mx-2 mx-md-4">
    //             <div className="row">
    //                 <div className="col-12 col-md-4 text-center text-info">
    //                     <h4 className='fw-semibold'>Connect Wallet</h4>
    //                     <p className='my-2 mb-md-4'>Start by connecting with one of the wallets below.
    //                         Be sure to store your private keys or seed phrase
    //                         securely. Never share them with anyone.</p>
    //                     <div className="row">
    //                         <div className="col-6 col-md-4">
    //                             <img src={require('../../assets/images/connect-wallet.png')} className='w-50 img-fluid' alt="" />
    //                             <p style={{ fontSize: '0.8em' }} className='mt-1 text-black'>Meta Mask</p>
    //                         </div>
    //                         <div className="col-6 col-md-4">
    //                             <img src={require('../../assets/images/connect-wallet.png')} className='w-50 img-fluid' alt="" />
    //                             <p style={{ fontSize: '0.8em' }} className='mt-1 text-black'>Meta Mask</p>
    //                         </div>
    //                         <div className="col-6 col-md-4">
    //                             <img src={require('../../assets/images/connect-wallet.png')} className='w-50 img-fluid' alt="" />
    //                             <p style={{ fontSize: '0.8em' }} className='mt-1 text-black'>Meta Mask</p>
    //                         </div>
    //                     </div>
    //                     <div className="row">
    //                         <div className="col-6 col-md-4">
    //                             <img src={require('../../assets/images/connect-wallet.png')} className='w-50 img-fluid' alt="" />
    //                             <p style={{ fontSize: '0.8em' }} className='mt-1 text-black'>Meta Mask</p>
    //                         </div>
    //                         <div className="col-6 col-md-4">
    //                             <img src={require('../../assets/images/connect-wallet.png')} className='w-50 img-fluid' alt="" />
    //                             <p style={{ fontSize: '0.8em' }} className='mt-1 text-black'>Meta Mask</p>
    //                         </div>
    //                         <div className="col-6 col-md-4">
    //                             <img src={require('../../assets/images/connect-wallet.png')} className='w-50 img-fluid' alt="" />
    //                             <p style={{ fontSize: '0.8em' }} className='mt-1 text-black'>Meta Mask</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="col-12 col-md-4"></div>
    //                 <div className="col-12 col-md-4">
    //                     <div>
    //                         <h5 className='text-warning fw-semibold text-center'>Haven't got a wallet yet?</h5>
    //                         <div className="container">
    //                             <img src={require('../../assets/images/crypto-img.png')} className='img-fluid w-50' alt="" />
    //                         </div>
    //                         <button className="btn btn-warning w-100">Learn How to Connect</button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
        <div className='position-sticky top-0 z-1 bg-black'>
            <div className='container'>
                <nav className="navbar navbar-expand-lg bg-body-dark navbar-dark">
                    <div className="container-fluid text-light">
                        <Link className="navbar-brand navLogo" to={'/'}>
                            <img src={require('../../assets/images/logo.png')} alt="AlgoX" className='img-fluid w-50' />
                        </Link>
                        <span className='border border-warning px-2 rounded pb-1 me-auto headDownsSmall'>
                            <Popover content={notify} trigger="click">
                                <span className='mx-1' style={{ cursor: 'pointer' }}><GoBell color='white' /></span>
                            </Popover>
                            <Popover content={settings} trigger="click">
                                <span className='mx-1' style={{ cursor: 'pointer' }}><IoSettingsOutline color='white' /></span>
                            </Popover>
                            <Popover content={globe} trigger="click">
                                <span className='mx-1' style={{ cursor: 'pointer' }}><IoIosGlobe color='white' /></span>
                            </Popover>
                        </span>
                        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-light"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link headerLinks" aria-current="page" to={'#'}>ALGOX CAPITAL</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link headerLinks" to={'/shop'}>SHOP</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link headerLinks" to={'#'}>TRENDING PROGRAM</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link headerLinks" to={'/faq'}>FAQs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link headerLinks" to={'#'}>MORE</Link>
                                </li>
                                {
                                    user
                                        ? <li className="nav-item">
                                            <Link className="nav-link headerLinks" to={'/user/dashboard'}>Dashboard</Link>
                                        </li>
                                        : ''
                                }
                            </ul>
                            <span className="navbar-text">
                                <div>
                                    <span className='border border-warning px-2 rounded pb-1 headDownsLg'>
                                        <Popover content={notify} trigger="click">
                                            <span className='mx-1' style={{ cursor: 'pointer' }}><GoBell color='white' /></span>
                                        </Popover>
                                        <Popover content={settings} trigger="click">
                                            <span className='mx-1' style={{ cursor: 'pointer' }}><IoSettingsOutline color='white' /></span>
                                        </Popover>
                                        <Popover content={globe} trigger="click">
                                            <span className='mx-1' style={{ cursor: 'pointer' }}><IoIosGlobe color='white' /></span>
                                        </Popover>
                                    </span>
                                    <Popover content={wallet} trigger="click">
                                        <button className="btn btn-sm mx-2 btn-warning px-2">CONNECT WALLET</button>
                                    </Popover>
                                    {
                                        !user
                                            ? <Link to={'/auth/login'} className="btn btn-sm mx-2 btn-outline-warning px-2 text-light">SIGN IN</Link>
                                            : <button onClick={handleUserLogout} className="btn btn-sm mx-2 btn-outline-danger px-2 text-light">SIGN OUT</button>
                                    }
                                </div>
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
