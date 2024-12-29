import React from 'react'
import TradeForm from '../components/TradeForm'
import api from '../api/api'

const AddTrade: React.FC = () => {
  const handleSubmit = (data: any) => {
    api.post('/trades', data).then(() => {
      window.location.href = '/trades'
    })
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-xl font-bold mb-4 text-center">Add Trade</h1>
      <TradeForm onSubmit={handleSubmit} />
    </div>
  )
}

export default AddTrade
