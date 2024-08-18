import React from 'react'
import arrow from "../../assets/arrow_icon.png"
import logo from '../../assets/logo1.png'
import './NavBar.css'
const NavBar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="" srcset="" className='logo' />
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Price</li>
                <li>Blog</li>
            </ul>
            <div className='nav-right'>
                <select>
                    <option value="usd">USD</option>
                    <option value="inr">INR</option>
                    <option value="eur">EUR</option>
                </select>
                <button>Sign Up <img src={arrow} alt="" srcset="" />
                </button>
            </div>
        </div>
    )
}

export default NavBar
