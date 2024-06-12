import React from 'react'
import { Link } from 'react-router-dom'
import { GoBell } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";


export default function Navbar() {
    return (
        <div className='position-sticky top-0 z-1 bg-black'>
            <div className='container'>
                <nav className="navbar navbar-expand-lg bg-body-dark navbar-dark">
                    <div className="container-fluid text-light">
                        <Link className="navbar-brand navLogo" to={'/'}>
                            <img src={require('../../assets/images/logo.png')} alt="AlgoX" className='img-fluid w-50' />
                        </Link>
                        <span className='border border-warning px-2 rounded pb-1 me-auto headDownsSmall'>
                            <Link className='px-1 text-light'><GoBell /></Link><Link className='px-1 text-light'><IoSettingsOutline /></Link><Link className='px-1 text-light'><IoIosGlobe /></Link>
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
                                    <Link className="nav-link headerLinks" to={'#'}>EXCHANGE</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link headerLinks" to={'#'}>TRENDING PROGRAM</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link headerLinks" to={'#'}>MORE</Link>
                                </li>
                            </ul>
                            <span className="navbar-text">
                                <div>
                                    <span className='border border-warning px-2 rounded pb-1 headDownsLg'>
                                        <Link className='px-1 text-light'><GoBell /></Link><Link className='px-1 text-light'><IoSettingsOutline /></Link><Link className='px-1 text-light'><IoIosGlobe /></Link>
                                    </span>
                                    <button className="btn btn-sm mx-2 btn-warning px-2">CONNECT WALLET</button>
                                    <button className="btn btn-sm mx-2 btn-outline-warning px-2 text-light">SIGN IN</button>

                                </div>
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
