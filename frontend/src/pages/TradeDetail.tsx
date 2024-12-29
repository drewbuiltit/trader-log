import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../api/api'

const TradeDetail: React.FC = () => {
  // const { id } = useParams()
  // const [trade, setTrade] = useState(null)
  //
  // useEffect(() => {
  //   api.get(`/trades/${id}`).then((res) => setTrade(res.data))
  // }, [id])
  //
  // if (!trade) return <div>Loading...</div>

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-xl font-bold mb-4 text-center">Trade Detail</h1>
      <p>Symbol: TSLA</p>
      <p>Trade Date: 12/29/2024</p>
      <p>Type: BUY</p>
      <p>Quantity: 10,000</p>
      <p>Price: $120.00</p>
    </div>
  )
}

export default TradeDetail
