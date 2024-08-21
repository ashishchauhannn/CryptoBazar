import { createContext, useEffect, useState } from "react";

export const Coincontext = createContext();

const CoincontextProvider = (props) => {

    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        Symbol: "$"

    })

    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-QAARsXpxPVKoQbaTohnDWFut' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoin(response))
            .catch(err => console.error(err));
    }
    useEffect(() => {
        fetchAllCoin();
    }, [currency])

    const contextValue = {
        allCoin, currency, setCurrency
    }

    return (
        <Coincontext.Provider value={contextValue}>
            {props.children}
        </Coincontext.Provider>
    )

}

export default CoincontextProvider;