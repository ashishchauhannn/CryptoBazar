import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Coincontext } from '../../Context/Coincontext'
import './Coin.css'

const Coin = () => {
    const { coinId } = useParams()
    const [coinData, setCoinData] = useState();
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
    useEffect(() => {
        fetchCoinData()
    }, [currency])

    if (coinData) {
        return (
            <div className="coin">
                <div className="coinname">
                    <img src={coinData.image.large} alt="" />
                    <p><b>{coinData.name}({coinData.symbol})</b></p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="spinner">
                <div className="spin"></div>
            </div>
        )
    }
}
export default Coin
