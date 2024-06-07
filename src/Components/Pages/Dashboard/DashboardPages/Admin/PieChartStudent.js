import React from 'react';
import { PieChart, Pie, Cell, Tooltip,} from 'recharts';
const PieChartStudent = () => {
    const data = [
        { name: 'Male', value: 150 },
        { name: 'Female', value: 150 },
        { name: 'Teachers', value: 28 },

    ];
    const COLORS = ['#FFA601', '#0088FE', '#00C49F',];
    return (
        // <ResponsiveContainer >
            <PieChart width={600} height={400}>
                <Pie
                    data={data}
                    cx={180}
                    cy={150}
                    innerRadius={80}
                    outerRadius={120}
                    fill="#8884d8"
                    paddingAngle={3}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        // </ResponsiveContainer>
    );
};

export default PieChartStudent;