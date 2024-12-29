import React, { useEffect, useState } from 'react'
import api from '../api/api'
import TradeList from '../components/TradeList'

const Trades: React.FC = () => {
  const [trades, setTrades] = useState([])

  useEffect(() => {
    api.get('/trades').then((res) => setTrades(res.data))
  }, [])

  const handleViewDetails = (id: number) => {
    window.location.href = `/trades/${id}`
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-xl font-bold mb-4 text-center">Trades</h1>
      <TradeList trades={trades} onViewDetails={handleViewDetails} />
    </div>
  )
}

export default Trades
