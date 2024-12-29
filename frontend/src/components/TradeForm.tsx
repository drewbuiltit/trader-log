import React, { useState } from 'react'
import DynamicToggle from './DynamicToggle.tsx'

interface TradeFormProps {
  initialData?: Trade;
  onSubmit: (data: Trade) => void;
}

interface Trade {
  symbol: string;
  tradeDate: string;
  type: 'Buy' | 'Sell';
  quantity: number;
  price: number;
}

const TradeForm: React.FC<TradeFormProps> = ({ initialData, onSubmit }) => {
  const [trade, setTrade] = useState<Trade>(
    initialData || {
      symbol: '',
      tradeDate: '',
      type: 'Buy',
      quantity: '',
      price: ''
    }
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setTrade({ ...trade, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(trade)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mx-auto w-1/2">
      <label className="input input-bordered flex items-center gap-2">
        Symbol
        <input
          type="text"
          name="symbol"
          placeholder="TSLA"
          value={trade.symbol}
          onChange={handleChange}
          className="grow"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Trade Date
        <input
          type="date"
          name="tradeDate"
          value={trade.tradeDate}
          onChange={handleChange}
          className="grow"
        />
      </label>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-lg">Buy / Sell</span>
          <DynamicToggle
            name="type"
            value={trade.type === 'Buy'}
            onChange={handleChange}
          />
        </label>
      </div>
      <label className="input input-bordered flex items-center gap-2">
        Quantity
        <input
          type="text"
          name="quantity"
          placeholder="100"
          value={trade.quantity}
          onChange={handleChange}
          className="grow"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Price
        <input
          type="text"
          name="price"
          placeholder="150.00"
          value={trade.price}
          onChange={handleChange}
          className="grow"
        />
      </label>
      <button type="submit" className="btn btn-neutral btn-block">
        Submit
      </button>
    </form>
  )
}

export default TradeForm
