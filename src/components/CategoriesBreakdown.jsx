export function CategoriesBreakdown() {
  const categories = [
    { name: "Shopping", color: "blue-500", value: 1834, percentage: 35 },
    { name: "Food & Drinks", color: "green-500", value: 1310, percentage: 25 },
    { name: "Entertainment", color: "red-500", value: 1048, percentage: 20 },
    { name: "Transportation", color: "yellow-400", value: 786, percentage: 15 },
    { name: "Others", color: "purple-500", value: 262, percentage: 5 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full  mt-4 card">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories Breakdown</h3>
      <div className="space-y-4">
        {categories.map((cat, idx) => (
          <div key={idx}>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full bg-${cat.color}`}></span>
                <span className="text-sm text-gray-700">{cat.name}</span>
              </div>
              <span className="text-sm font-medium text-gray-800">
                ${cat.value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="w-full h-1 bg-gray-100 rounded-full">
              <div className={`h-full rounded-full bg-${cat.color} w-[${cat.percentage}%]`}></div>
            </div>
            <div className="text-xs text-right text-gray-400 mt-1">{cat.percentage}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
