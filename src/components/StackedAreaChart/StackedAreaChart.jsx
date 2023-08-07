import React from 'react'
import './StackedAreaChart.scss'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const StackedAreaChart = ({ data }) => {
    return (
        <div className='stackedAreaChart'>
            <h1>Revenue Analytics</h1>
            <div className="chart">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip contentStyle={{backgroundColor: 'transparent',border: 'none'}}/>
                        <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default StackedAreaChart