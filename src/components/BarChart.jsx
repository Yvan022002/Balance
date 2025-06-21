import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianAxis, Legend } from 'recharts';

export function BarCharts() {
    const data = [
    { name: 'Jan', income: 4000, expenses: 2400 },
    { name: 'Feb', income: 3000, expenses: 1398 },
    { name: 'Mar', income: 2000, expenses: 9800 },
    { name: 'Apr', income: 2780, expenses: 3908 },
    { name: 'May', income: 1890, expenses: 4800 },
    { name: 'Jun', income: 2390, expenses: 3800 },
    ];
    return (
        <div id="spending-overview" className="lg:col-span-2">
            <div id="spending-chart-card" className="card bg-white rounded-2xl shadow-md p-6 mb-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-dark-gray">Spending Overview</h3>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1.5 text-sm rounded-lg bg-primary text-white">Monthly</button>
                        <button className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 text-light-gray">Weekly</button>
                    </div>
                </div>
                <div className="h-[300px]">
                    <ResponsiveContainer>
                        <BarChart data={data}>
                            <Legend/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Bar dataKey="income" fill="#0A84FF" radius={[10, 10, 0, 0]}/>
                            <Bar dataKey="expenses" fill="#EF4444" radius={[10, 10, 0, 0]}/>
                        </BarChart>
                    </ResponsiveContainer>
                    
                </div>
            </div>
        </div>
    );
}
