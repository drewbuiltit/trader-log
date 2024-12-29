import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TradeList: React.FC = () => {
  const [trades, setTrades] = useState([])

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const response = await axios.get('http://localhost:8000/trades/')
        setTrades(response.data)
      } catch (error) {
        console.error('Error fetching trades:', error)
      }
    }

    fetchTrades()
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-4">
      <table className="w-full border-collapse border border-gray-200">
        <thead>
        <tr>
          <th className="border border-gray-200 p-2">Symbol</th>
          <th className="border border-gray-200 p-2">Trade Date</th>
          <th className="border border-gray-200 p-2">Buy/Sell</th>
          <th className="border border-gray-200 p-2">Price</th>
          <th className="border border-gray-200 p-2">Quantity</th>
          <th className="border border-gray-200 p-2">Fees</th>
          <th className="border border-gray-200 p-2">Comments</th>
        </tr>
        </thead>
        <tbody>
        {trades.map((trade: any) => (
          <tr key={trade.id}>
            <td className="border border-gray-200 p-2">{trade.symbol}</td>
            <td className="border border-gray-200 p-2">{trade.trade_date}</td>
            <td className="border border-gray-200 p-2">{trade.buy_sell}</td>
            <td className="border border-gray-200 p-2">{trade.entry_exit_price}</td>
            <td className="border border-gray-200 p-2">{trade.quantity}</td>
            <td className="border border-gray-200 p-2">{trade.fees}</td>
            <td className="border border-gray-200 p-2">{trade.comments}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default TradeList
