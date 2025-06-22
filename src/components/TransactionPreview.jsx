export function TransactionPreview(){
    const data=[
        {name:"Amazon",category:"Shopping",time:"2 hours ago",amount:120.50},
        {name:"Starbucks",category:"Food & Drinks",time:"5 hours ago",amount:9.40},
        {name:"Salary",category:"Income",time:"Yesterday",amount:4250.00},
        {name:"Netflix",category:"Entertainment",time:"2 days ago",amount:15.99},
        {name:"Uber",category:"Transportation",time:"3 days ago",amount:32.80},
    ]
    return(<div id="recent tansaction" className="transaction p-4 rounded-2xl shadow-md bg-white w-full mt-4">
                            <div className="flex justify-between">
                                <h2>Recent Transactions</h2>
                                <button className="text-primary text-sm">
                                    View All
                                </button>
                            </div>
                            {data.map((Transaction,index)=>(
                                <div key={index} className="flex justify-between my-4 pb-2 border-b border-gray-100">
                                    <div id="left" className="flex">
                                        <i className="fa-solid fa-shopping-bag text-primary bg-blue-200 rounded-full flex justify-center items-center p-3 w-10"></i>
                                        <div className="info ml-2">
                                            <h2>{Transaction.name}</h2>
                                            <p className="text-gray-400 text-xs">{Transaction.category} . {Transaction.time}</p>
                                        </div>
                                    </div>
                                    <p className="text-green-400 text-sm">${Transaction.amount}</p>
                                </div>
                            ))}
            </div>)
}