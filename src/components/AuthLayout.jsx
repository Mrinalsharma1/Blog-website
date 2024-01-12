import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Protected({ children, authentication = true }) {

    const navigat = useNavigate()
    const [loder, setLoder] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // here we can write in better way
        if (authentication && authStatus !== authentication) {
            navigat("/login")
        } else if (!authentication && authStatus !== authentication) {
            navigat('/')
        }
        setLoder(false)
    }, [authStatus, navigat, authentication])


    return loder ? <p>Loding...</p> : <>{children}</>
}
