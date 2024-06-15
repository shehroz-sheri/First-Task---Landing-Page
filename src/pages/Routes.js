import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Footer from '../components/Footer/Footer'
import Shop from './Shop/Shop'
import FAQ from './FAQ/FAQ'
import UserDashboard from './User/Dashboard/UserDashboard'
import PrivateRoute from '../components/Routes/PrivateRoute'
import Login from './Auth/Login'
import AuthRoutes from '../components/Routes/AuthRoutes'


export default function Index() {
    return (
        <>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/faq' element={<FAQ />} />

                    <Route element={<PrivateRoute />}>
                        <Route path='/user/' >
                            <Route path='dashboard' element={<UserDashboard />} />
                        </Route>
                    </Route>

                    <Route element={<AuthRoutes />}>
                        <Route path='/auth/'>
                            <Route path='login' element={<Login />} />
                        </Route>
                    </Route>
                </Routes>
            </main>
            <Footer />
        </>
    )
}
