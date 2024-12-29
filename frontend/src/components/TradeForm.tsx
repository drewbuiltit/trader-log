import React, { useState } from 'react'
import axios from 'axios'

const TradeForm: React.FC = () => {
  const [formData, setFormData] = useState({
    symbol: '',
    trade_date: '',
    buy_sell: 'Buy',
    entry_exit_price: '',
    quantity: '',
    fees: '',
    comments: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8000/trades/', formData)
      alert('Trade added successfully!')
    } catch (error) {
      console.error('Error adding trade:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4 bg-white shadow-md rounded">
      <input
        name="symbol"
        type="text"
        placeholder="Symbol"
        value={formData.symbol}
        onChange={handleChange}
        className="w-full p-2 border"
      />
      <input
        name="trade_date"
        type="date"
        value={formData.trade_date}
        onChange={handleChange}
        className="w-full p-2 border"
      />
      <select
        name="buy_sell"
        value={formData.buy_sell}
        onChange={handleChange}
        className="w-full p-2 border"
      >
        <option value="Buy">Buy</option>
        <option value="Sell">Sell</option>
      </select>
      <input
        name="entry_exit_price"
        type="number"
        placeholder="Entry/Exit Price"
        value={formData.entry_exit_price}
        onChange={handleChange}
        className="w-full p-2 border"
      />
      <input
        name="quantity"
        type="number"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        className="w-full p-2 border"
      />
      <input
        name="fees"
        type="number"
        placeholder="Fees"
        value={formData.fees}
        onChange={handleChange}
        className="w-full p-2 border"
      />
      <textarea
        name="comments"
        placeholder="Comments"
        value={formData.comments}
        onChange={handleChange}
        className="w-full p-2 border"
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Add Trade
      </button>
    </form>
  )
}

export default TradeForm
