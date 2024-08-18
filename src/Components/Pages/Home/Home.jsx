import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
            <div className="hero">
                <h1>The crypto Bazar</h1>
                <p>Welcome to the largest cryptocurrency market.
                    Sign up to explore more!
                </p>
                <form>
                    <input type="text" placeholder='Search..' />
                    <button type=''>Search</button>
                </form>
            </div>
            <div className="cryptotable">
                <div className="tablelayout">
                    <p>#</p>
                    <p>currency</p>
                    <p>price</p>
                    <p style={{ textAlign: "center" }}>24h change</p>
                    <p className='marketcap'>Value</p>
                </div>
            </div>

        </div>
    )
}

export default Home
