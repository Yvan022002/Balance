import { PieChart,Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export function DonutChart(){
   const data = [
    { name: 'Shopping', value: 35 },
    { name: 'Food & Drinks', value: 25 },
    { name: 'Entertainment', value: 20 },
    { name: 'Transportation', value: 15 },
    { name: 'Others', value: 5 },
  ];

    const COLORS = ['#3B82F6','#10B981','#EF4444','#FACC15','#8B5CF6'];
   return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-xs">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-semibold text-gray-700">Expense Categories</h2>
        <button>
            <i className="fa-solid fa-ellipsis-h text-gray-400"></i>
        </button>
      </div>

      <div className="relative h-48">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Texte centré */}
        <div className="absolute top-3/5 left-5/8 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-lg font-bold text-gray-900">85.5%</p>
          <p className="text-xs text-gray-500">Normal Level</p>
        </div>
      </div>

      {/* Légende custom */}
      <div className="mt-4 space-y-1 text-sm text-gray-600">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[index] }}></span>
              <span>{item.name}</span>
            </div>
            <span className="font-medium">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}