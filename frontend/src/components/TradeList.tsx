import React from 'react'

interface Trade {
  id: number;
  symbol: string;
  tradeDate: string;
  type: string;
  quantity: number;
  price: number;
}

interface TradeListProps {
  trades: Trade[];
  onViewDetails: (id: number) => void;
}

const TradeList: React.FC<TradeListProps> = ({ trades, onViewDetails }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <th>Symbol</th>
          <th>Trade Date</th>
          <th>Buy/Sell</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Comments</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            TSLA
          </td>
          <td>
            12/29/2024
          </td>
          <th>BUY</th>
          <td>
            $120.00
          </td>
          <td>
            10,000
          </td>
          <td>
            LEAP Play
          </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <th></th>
          <th>Symbol</th>
          <th>Trade Date</th>
          <th>Buy/Sell</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Comments</th>
        </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default TradeList
