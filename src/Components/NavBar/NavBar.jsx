import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import arrow from "../../assets/arrow_icon.png"
import logo from '../../assets/logo1.png'
import { Coincontext } from '../Context/Coincontext'
import './NavBar.css'
const NavBar = () => {

    const { setCurrency } = useContext(Coincontext)
    const currencyHandler = (event) => {
        switch (event.target.value) {
            case "usd": {
                setCurrency({ name: "usd", Symbol: "$" })
                break;
            }
            case "eur": {
                setCurrency({ name: "eur", Symbol: "€" })
                break;
            }
            case "inr": {
                setCurrency({ name: "inr", Symbol: "₹" })
                break;
            }
            default: {
                setCurrency({ name: "usd", Symbol: "$" })
                break;
            }

        }
    }
    return (
        <div className='navbar'>
            <img src={logo} alt="" className='logo' />

            <ul>
                <Link to={'/'} > <li>Home</li> </Link>
                <li>Features</li>
                <li>Price</li>
                <Link to={'/blog'}> <li>Blog</li></Link>
            </ul>
            <div className='nav-right'>
                <select onChange={currencyHandler}>
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
