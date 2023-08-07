import React from 'react'
import './TinyLineChart.scss'
import { Link } from 'react-router-dom'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'

const TinyLineChart = ({ data, name, color, number,select, procent }) => {
  return (
    <div className='tinyLineChart'>
      <div className="left">
        <h3>{name}</h3>
        <h2>{number}</h2>
        <Link to='/' className='link'>View all</Link>
      </div>
      <div className="right">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
              <Tooltip
                contentStyle={{ backgroundColor: 'transparent', border: 'none' }}
                labelStyle={{display: 'none'}}
                position={{x: 10, y: 80}}
              />
              <Line
                type="monotone"
                dataKey={select}
                stroke={color}
                strokeWidth={2}
                dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="info">
          <p style={procent > 0 ? { color: 'lightgreen' } : { color: 'lightcoral' }}>{procent}%</p>
          <span>this month</span>
        </div>
      </div>
    </div>
  )
}

export default TinyLineChart