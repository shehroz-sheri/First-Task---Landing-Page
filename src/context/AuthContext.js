import { message } from 'antd'
import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthProvider = props => {
    const navigate = useNavigate()
    const user = localStorage.getItem('isLoggedIn')

    const loginUser = (username, password) => {
        if (username === 'abc@example.com' || password == '123456') {
            localStorage.setItem('isLoggedIn', true);
            message.success('Login Successfully')
            navigate('/')
        } else {
            message.error('Invalid Credentials')
        }
    }

    const logoutUser = (credentials) => {
        if (credentials === 'loggedOut') {
            localStorage.removeItem('isLoggedIn');
            message.success('Logout Successfully')
            navigate('/')
        }
    }

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)