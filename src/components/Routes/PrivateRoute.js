import React from 'react'
import { useAuth } from '../../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
    const { user } = useAuth()

    return (
        user ? <Outlet /> : <Navigate to='/auth/login' />
    )
}
