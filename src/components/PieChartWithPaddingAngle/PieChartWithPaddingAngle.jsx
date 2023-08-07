import React from 'react'
import './PieChartWithPaddingAngle.scss'
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts'

const PieChartWithPaddingAngle = ({ data, colors }) => {
    return (
        <div className='pieChart'>
            <h1>Leads by Source</h1>
            <div className="chart">
                <PieChart width={210} height={400} >
                    <Tooltip
                        contentStyle={{ backgroundColor: 'transparent', border: 'none' }}
                        itemStyle={{color: 'white'}}
                    />
                    <Legend verticalAlign="bottom" height={50} width={250} />
                    <Pie
                        data={data}
                        cx={120}
                        cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
        </div>
    )
}

export default PieChartWithPaddingAngle