import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

export function BarChart() {
    const chartRef = useRef(null); // contiendra le <canvas>
    const chartInstanceRef = useRef(null); // pour éviter de recréer le graphique à chaque rendu

    useEffect(() => {
        if (chartRef.current && !chartInstanceRef.current) {
            const ctx = chartRef.current.getContext('2d');
            chartInstanceRef.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [
                        {
                            label: 'Income',
                            data: [4500, 5200, 4800, 5800, 6000, 5500],
                            backgroundColor: '#0A84FF',
                            borderRadius: 8,
                            barPercentage: 0.5,
                        },
                        {
                            label: 'Expenses',
                            data: [3200, 3800, 3600, 4200, 4500, 4000],
                            backgroundColor: '#EF4444',
                            borderRadius: 8,
                            barPercentage: 0.5,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                boxWidth: 10,
                                usePointStyle: true,
                                pointStyle: 'circle'
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                drawBorder: false,
                                color: '#E5E7EB'
                            },
                            ticks: {
                                callback: function(value) {
                                    return '$' + value;
                                }
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });
        }

        // Cleanup
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
                chartInstanceRef.current = null;
            }
        };
    }, []);

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
                    <canvas ref={chartRef} className="chartComponents w-full h-full"></canvas>
                </div>
            </div>
        </div>
    );
}
