import React from 'react'
import { useDispatch } from 'react-redux';
import authServices from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authServices.logout()
            .then(() => {
                dispatch(logout())
            })
            .catch((err) => {
                console.error('component :: Header :: LogoutBtn', err);
            })
    }
    return (
        <button onClick={logoutHandler} className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full'>LogoutBtn</button>
    )
}

export default LogoutBtn