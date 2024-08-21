import React, { useContext, useEffect, useState } from 'react';
import { Coincontext } from '../../Context/Coincontext';
import './Home.css';
const Home = () => {

    const { allCoin, currency } = useContext(Coincontext);
    const [displayCoin, setDisplayCoin] = useState([]);

    useEffect(() => {
        setDisplayCoin(allCoin)
    }, [allCoin])




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
                {
                    displayCoin.slice(0, 15).map((item, index) => (
                        <div className="tablelayout" key={index}>
                            <p>{item.market_cap_rank}</p>
                            <div>
                                <img src={item.image} alt="" />
                                <p>{item.name + "-" + item.symbol}</p>
                            </div>
                            <p>{currency.Symbol}{item.current_price.toLocaleString()}</p>

                            <p className='price24h'>{Math.floor(item.price_change_percentage_24h * 100) / 100}</p>
                            <p className='marketcap'>{currency.Symbol}{item.market_cap.toLocaleString()}</p>
                        </div>



                    ))
                }
            </div>

        </div>
    )
}

export default Home
