import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Chart = () => {
  const data = [
    {
      name: 'Pass',
      uv: 200,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Fail',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'A plus',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },

  ];
  return (

    <ResponsiveContainer width={400} height={400}>
      <AreaChart
       
        data={data}
        margin={{
          top: 10,
          right: 50,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
      </AreaChart>
    </ResponsiveContainer>

  );
};

export default Chart;