import { useEffect, useState } from "react"

const URL_API = "https://api.blockchain.com/v3/exchange/tickers/BTC-USD"
const valueInDollars = 69;


export default function bitcoinUpdate() {
    const [valueBitcoinInDollars, setValueBitcoinInDollars] = useState(0)

    async function fetchBitcoinData() {
        try {

            const res = await fetch(URL_API)
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const data = await res.json()
            const valueBitcoinNow = data.last_trade_price
            setValueBitcoinInDollars(Number((valueInDollars / valueBitcoinNow).toFixed(8)));

        } catch (error: any) {
            console.error("Error fetching bitcoin update:", error.message);
        }

    }

    useEffect(() => {

        const intervalID = setInterval(() => {
            fetchBitcoinData()
        }, 5000)
        return () => clearInterval(intervalID);

    }, [])


    return { valueBitcoinInDollars }
}

