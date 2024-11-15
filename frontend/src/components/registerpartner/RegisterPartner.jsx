import React from 'react'
import './Registerpartner.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const RegisterPartner = () => {
    return (
        <div className='register-partner' id='register-partner'>
            <h1>For partner registration</h1>
            <p>Click one of the icon bellow</p>
            <div className="register-partner-platform">
                <Link to='/registerrestaurant'><img src={assets.restaurant_logo} alt="" /></Link>
                <img src={assets.delivery_logo} alt="" />
            </div>
        </div>
    )
}

export default RegisterPartner