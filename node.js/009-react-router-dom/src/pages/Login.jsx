import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <div className='h-[100vh] capitalize text-2xl font-[700] grid bg-red-300 place-items-center'>
                <div>
                    Login Page <br/>
                    <Link to={'/home'}>Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
