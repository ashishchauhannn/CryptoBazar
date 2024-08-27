import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Coincontext } from '../../Context/Coincontext'
import LineChart from '../../LineChart/LineChart'
import './Coin.css'

const Coin = () => {
    const { coinId } = useParams()
    const [coinData, setCoinData] = useState();
    const [historicalData, setHistoricalData] = useState();
    const { currency } = useContext(Coincontext)

    const fetchCoinData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-QAARsXpxPVKoQbaTohnDWFut' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
            .then(response => response.json())
            .then(response => setCoinData(response))
            .catch(err => console.error(err));
    }

    //coin chart 

    const fetchHistoricalData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-QAARsXpxPVKoQbaTohnDWFut' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=7&interval=daily`, options)
            .then(response => response.json())
            .then(response => setHistoricalData(response))
            .catch(err => console.error(err))


    }


    useEffect(() => {
        fetchCoinData()
        fetchHistoricalData()
    }, [currency])

    if (coinData && historicalData) {
        return (
            <div className="coin">
                <div className="coinname">
                    <img src={coinData.image.large} alt="" />
                    <p><b>{coinData.name}({coinData.symbol})</b></p>
                </div>
                <div className="coinchart">
                    <LineChart historicalData={historicalData} />
                </div>


                <div className="coininfo">
                    <ul>
                        <li>Crypto Rank</li>
                        <li>{coinData.market_cap_rank}</li>
                    </ul>
                    <ul>
                        <li>Current Price</li>
                        <li>{currency.Symbol}
                            {coinData.market_data.current_price
                            [currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>Market capital</li>
                        <li>{currency.Symbol}
                            {coinData.market_data.market_cap
                            [currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>24 high</li>
                        <li>{currency.Symbol}
                            {coinData.market_data.high_24h
                            [currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>24 low</li>
                        <li>{currency.Symbol}
                            {coinData.market_data.low_24h
                            [currency.name].toLocaleString()}</li>
                    </ul>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className="spinner">
                <div className="spin"></div>
            </div>
        )
    }
}
export default Coin
