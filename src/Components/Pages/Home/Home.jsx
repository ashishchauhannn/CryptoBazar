import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Coincontext } from '../../Context/Coincontext';
import './Home.css';
const Home = () => {

    const { allCoin, currency } = useContext(Coincontext);
    const [displayCoin, setDisplayCoin] = useState([]);
    const [input, setInput] = useState();

    const inputHandler = (event) => {
        setInput(event.target.value);
        if (event.target.value === "") {
            setDisplayCoin(allCoin);
        }
    }

    const searchHandler = async (event) => {
        event.preventDefault();
        const coins = await allCoin.filter((item) => {
            return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setDisplayCoin(coins)
    }


    useEffect(() => {
        setDisplayCoin(allCoin)
    }, [allCoin])




    return (
        <div className='home'>
            <div className="hero">
                <h1>The CryptoBazar</h1>
                <p>Welcome to the largest cryptocurrency market.
                    Sign up to explore more!
                </p>
                <form onSubmit={searchHandler} >

                    <input onChange={inputHandler} list='coinlist' value={input} type="text"
                        placeholder='Search crypto here..' required />
                    <datalist id='coinlist'>
                        {allCoin.map((item, index) => (<option key={index} value={item.name} />))}
                    </datalist>


                    <button type='submit'>Search</button>
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
                    displayCoin.slice(0, 10).map((item, index) => (
                        <Link to={`/coin/${item.id}`} className="tablelayout" key={index}>
                            <p>{item.market_cap_rank}</p>
                            <div>
                                <img src={item.image} alt="" />
                                <p>{item.name + "-" + item.symbol}</p>
                            </div>
                            <p>{currency.Symbol}{item.current_price.toLocaleString()}</p>

                            <p className='price24h'>{Math.floor(item.price_change_percentage_24h * 100) / 100}</p>
                            <p className='marketcap'>{currency.Symbol}{item.market_cap.toLocaleString()}</p>
                        </Link>



                    ))
                }
            </div>

        </div>
    )
}

export default Home
