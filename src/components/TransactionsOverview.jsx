export function TransactionsOverview(){
    return(         <div id="transactions-list" className="card bg-white rounded-2xl shadow-md p-6">
                            {/* Transaction list header */}
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-semibold text-dark-gray">All Transactions</h3>
                                <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search transactions..."
                                    className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg bg-blue-gray border-0 focus:ring-2 focus:ring-primary text-sm"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-light-gray">
                                    <i className="fa-solid fa-search"></i>
                                </div>
                                </div>
                            </div>

                            {/* Transaction header */}
                            <div className="hidden md:flex items-center py-3 border-b border-gray-100 text-sm font-medium text-light-gray">
                                <div className="w-12"></div>
                                <div className="w-6/12 md:w-4/12">Transaction</div>
                                <div className="w-3/12 md:w-3/12">Category</div>
                                <div className="w-3/12 md:w-3/12">Date</div>
                                <div className="w-2/12 text-right">Amount</div>
                            </div>
                                                    
                            {/**Transaction Items */}
                            <div class="space-y-1 mt-2">
                                {/**Transaction Item*/}
                                <div class="transaction-row flex items-center py-4 border-b border-gray-100 rounded-lg hover:cursor-pointer">
                                    <div class="w-12 flex justify-center">
                                        <div class="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary">
                                            <i class="fa-solid fa-building-columns"></i>
                                        </div>
                                    </div>
                                    <div class="w-6/12 md:w-4/12">
                                        <p class="text-sm font-medium text-dark-gray">Salary Deposit</p>
                                        <p class="text-xs text-light-gray">ABC Company</p>
                                    </div>
                                    <div class="hidden md:block w-3/12">
                                        <span class="px-2 py-1 bg-green-100 text-success rounded-full text-xs">Income</span>
                                    </div>
                                    <div class="w-3/12 md:w-3/12 text-xs text-light-gray">Jun 01, 2024</div>
                                    <div class="w-3/12 md:w-2/12 text-right text-sm font-medium text-success">+$4,250.00</div>
                                </div>
                                
                                {/**Transaction Item*/}
                                <div class="transaction-row flex items-center py-4 border-b border-gray-100 rounded-lg hover:cursor-pointer">
                                    <div class="w-12 flex justify-center">
                                        <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                                            <i class="fa-solid fa-shopping-bag"></i>
                                        </div>
                                    </div>
                                    <div class="w-6/12 md:w-4/12">
                                        <p class="text-sm font-medium text-dark-gray">Amazon</p>
                                        <p class="text-xs text-light-gray">Online Shopping</p>
                                    </div>
                                    <div class="hidden md:block w-3/12">
                                        <span class="px-2 py-1 bg-blue-100 text-primary rounded-full text-xs">Shopping</span>
                                    </div>
                                    <div class="w-3/12 md:w-3/12 text-xs text-light-gray">Jun 02, 2024</div>
                                    <div class="w-3/12 md:w-2/12 text-right text-sm font-medium text-danger">-$120.50</div>
                                </div>
                                
                                {/**Transaction Item*/}
                                <div class="transaction-row flex items-center py-4 border-b border-gray-100 rounded-lg hover:cursor-pointer">
                                    <div class="w-12 flex justify-center">
                                        <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-success">
                                            <i class="fa-solid fa-utensils"></i>
                                        </div>
                                    </div>
                                    <div class="w-6/12 md:w-4/12">
                                        <p class="text-sm font-medium text-dark-gray">Starbucks</p>
                                        <p class="text-xs text-light-gray">Coffee Shop</p>
                                    </div>
                                    <div class="hidden md:block w-3/12">
                                        <span class="px-2 py-1 bg-green-100 text-success rounded-full text-xs">Food & Drinks</span>
                                    </div>
                                    <div class="w-3/12 md:w-3/12 text-xs text-light-gray">Jun 03, 2024</div>
                                    <div class="w-3/12 md:w-2/12 text-right text-sm font-medium text-danger">-$8.40</div>
                                </div>
                                
                                {/**Transaction Item*/}
                                <div class="transaction-row flex items-center py-4 border-b border-gray-100 rounded-lg hover:cursor-pointer">
                                    <div class="w-12 flex justify-center">
                                        <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-danger">
                                            <i class="fa-solid fa-film"></i>
                                        </div>
                                    </div>
                                    <div class="w-6/12 md:w-4/12">
                                        <p class="text-sm font-medium text-dark-gray">Netflix</p>
                                        <p class="text-xs text-light-gray">Subscription</p>
                                    </div>
                                    <div class="hidden md:block w-3/12">
                                        <span class="px-2 py-1 bg-red-100 text-danger rounded-full text-xs">Entertainment</span>
                                    </div>
                                    <div class="w-3/12 md:w-3/12 text-xs text-light-gray">Jun 05, 2024</div>
                                    <div class="w-3/12 md:w-2/12 text-right text-sm font-medium text-danger">-$15.99</div>
                                </div>
                                
                                {/**Transaction Item*/}
                                <div class="transaction-row flex items-center py-4 border-b border-gray-100 rounded-lg hover:cursor-pointer">
                                    <div class="w-12 flex justify-center">
                                        <div class="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                                            <i class="fa-solid fa-taxi"></i>
                                        </div>
                                    </div>
                                    <div class="w-6/12 md:w-4/12">
                                        <p class="text-sm font-medium text-dark-gray">Uber</p>
                                        <p class="text-xs text-light-gray">Ride Share</p>
                                    </div>
                                    <div class="hidden md:block w-3/12">
                                        <span class="px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs">Transportation</span>
                                    </div>
                                    <div class="w-3/12 md:w-3/12 text-xs text-light-gray">Jun 06, 2024</div>
                                    <div class="w-3/12 md:w-2/12 text-right text-sm font-medium text-danger">-$32.80</div>
                                </div>
                                
                                {/**Transaction Item*/}
                                <div class="transaction-row flex items-center py-4 border-b border-gray-100 rounded-lg hover:cursor-pointer">
                                    <div class="w-12 flex justify-center">
                                        <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                            <i class="fa-solid fa-gift"></i>
                                        </div>
                                    </div>
                                    <div class="w-6/12 md:w-4/12">
                                        <p class="text-sm font-medium text-dark-gray">Target</p>
                                        <p class="text-xs text-light-gray">Gift Purchase</p>
                                    </div>
                                    <div class="hidden md:block w-3/12">
                                        <span class="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-xs">Shopping</span>
                                    </div>
                                    <div class="w-3/12 md:w-3/12 text-xs text-light-gray">Jun 08, 2024</div>
                                    <div class="w-3/12 md:w-2/12 text-right text-sm font-medium text-danger">-$45.75</div>
                                </div>
                                
                                {/**Transaction Item*/}
                                <div class="transaction-row flex items-center py-4 border-b border-gray-100 rounded-lg hover:cursor-pointer">
                                    <div class="w-12 flex justify-center">
                                        <div class="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary">
                                            <i class="fa-solid fa-exchange-alt"></i>
                                        </div>
                                    </div>
                                    <div class="w-6/12 md:w-4/12">
                                        <p class="text-sm font-medium text-dark-gray">Bank Transfer</p>
                                        <p class="text-xs text-light-gray">To Savings</p>
                                    </div>
                                    <div class="hidden md:block w-3/12">
                                        <span class="px-2 py-1 bg-blue-100 text-primary rounded-full text-xs">Transfer</span>
                                    </div>
                                    <div class="w-3/12 md:w-3/12 text-xs text-light-gray">Jun 10, 2024</div>
                                    <div class="w-3/12 md:w-2/12 text-right text-sm font-medium text-danger">-$500.00</div>
                                </div>
                            </div>
                                {/**Pagination**/}
                            <div class="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                                <div class="text-sm text-light-gray">
                                    Showing <span class="font-medium">1</span> to <span class="font-medium">7</span> of <span class="font-medium">125</span> transactions
                                </div>
                                <div class="flex items-center space-x-2">
                                    <button class="p-2 rounded-lg border border-gray-200 text-light-gray">
                                        <i class="fa-solid fa-chevron-left"></i>
                                    </button>
                                    <button class="p-2 rounded-lg bg-primary text-white w-8 h-8 flex items-center justify-center">
                                        1
                                    </button>
                                    <button class="p-2 rounded-lg border border-gray-200 text-light-gray w-8 h-8 flex items-center justify-center">
                                        2
                                    </button>
                                    <button class="p-2 rounded-lg border border-gray-200 text-light-gray w-8 h-8 flex items-center justify-center">
                                        3
                                    </button>
                                    <button class="p-2 rounded-lg border border-gray-200 text-light-gray">
                                        <i class="fa-solid fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    
                            )
}