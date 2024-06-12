import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Footer from '../components/Footer/Footer'
import Shop from './Shop/Shop'
import FAQ from './FAQ/FAQ'

export default function Index() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/faq' element={<FAQ />} />
            </Routes>
            <Footer />
        </>
    )
}
