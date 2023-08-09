import React from 'react'
import './Home.scss'
import TopDeals from '../../components/TopDeals/TopDeals'
import BarCharts from '../../components/BarChart/BarChart'
import TinyLineChart from '../../components/TinyLineChart/TinyLineChart'
import PieChartWithPaddingAngle from '../../components/PieChartWithPaddingAngle/PieChartWithPaddingAngle'
import StackedAreaChart from '../../components/StackedAreaChart/StackedAreaChart'

const Home = () => {
  const data = [
    {
      name: 'Mon',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Tue',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Wed',  
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Thu',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Fri',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Sat',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Sun',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data2 = [
    { name: 'Mobile', value: 400 },
    { name: 'Desktop', value: 300 },
    { name: 'Laptop', value: 300 },
    { name: 'Tablet', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className='home'>
      <div className="div div1">
        <TopDeals />
      </div>
      <div className="div div2">
        <TinyLineChart
          data={data}
          name={'Total Users'}
          color={'#82ca9d'}
          number={'4.283'}
          procent={20}
          select={'pv'}
        />
      </div>
      <div className="div div3">
        <TinyLineChart
          data={data}
          name={'Total Revenue'}
          color={'#F9B444'}
          number={'$56.432'}
          procent={-12}
          select={'uv'}
        />
      </div>
      <div className="div div4">
        <PieChartWithPaddingAngle 
          data= {data2}
          colors = {COLORS}
        />
      </div>
      <div className="div div5">
        <TinyLineChart
          data={data}
          name={'Total Products'}
          color={'#227EF5'}
          number={'239'}
          procent={21}
          select={'pv'}
        />
      </div>
      <div className="div div6">
        <TinyLineChart
          data={data}
          name={'Total Ratio'}
          color={'#798492'}
          number={'2.5'}
          procent={12}
          select={'amt'}
        />
      </div>
      <div className="div div7">
        <StackedAreaChart data={data} />
      </div>
      <div className="div div8">
        <BarCharts data={data} name={'Total Visit'} color={'#82ca9d'} />
      </div>
      <div className="div div9">
        <BarCharts data={data} name={'Profit Earned'} color={'#8884d8'} />
      </div>
    </div>
  )
}

export default Home