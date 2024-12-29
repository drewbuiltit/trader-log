import React from 'react'
import { Routes, Route } from 'react-router'
import Trades from './pages/Trades'
import TradeDetail from './pages/TradeDetail'
import AddTrade from './pages/AddTrade'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/trades" element={<Trades />} />
      <Route path="/trades/:id" element={<TradeDetail />} />
      <Route path="/add-trade" element={<AddTrade />} />
    </Routes>
  )
}

export default App
