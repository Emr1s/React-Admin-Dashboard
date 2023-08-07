import React from 'react'
import './BarChart.scss'
import { Bar, ResponsiveContainer, BarChart, Tooltip } from 'recharts'


const BarCharts = ({ data, name, color }) => {

    return (
        <div className='barChart'>
            <h2>{name}</h2>
            <div className="chart">
                <ResponsiveContainer width="100%" height="100%" >
                    <BarChart width={150} height={40} data={data}  >
                        <Tooltip
                            contentStyle={{ backgroundColor: 'transparent', border: 'none' }}
                            labelStyle={{ display: 'none' }}
                            position={{ x: 100, y: -30 }}
                        />
                        <Bar dataKey="uv" fill={color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BarCharts