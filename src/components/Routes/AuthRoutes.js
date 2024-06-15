import React from 'react'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom/dist'
import { useAuth } from '../../context/AuthContext'

const AuthRoutes = () => {
    const { user } = useAuth()

    return (
        !user ? <Outlet /> : <Navigate to='/' />
    )
}

export default AuthRoutes