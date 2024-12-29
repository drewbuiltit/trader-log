import React from 'react'
import { Routes, Route } from 'react-router'
import TradeForm from './components/TradeForm'
import TradeList from './components/TradeList'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TradeList />} />
      <Route path="/add-trade" element={<TradeForm />} />
    </Routes>
  )
}

export default App
