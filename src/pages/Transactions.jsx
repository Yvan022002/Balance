import { BarCharts } from "../components/BarChart";
import { Card } from "../components/Card";
import { DonutChart } from "../components/DonutChart";
import { SummaryCard } from "../components/summaryCard";
import { TransactionPreview } from "../components/TransactionPreview";
import { TransactionsOverview } from "../components/TransactionsOverview";

export function Transactions(){
    return(
        <div id="Transactions">
            <div className="body p-5">
                <div className="cards grid grid-cols-4 gap-4 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1">
                    <SummaryCard nom="Total Transactions"/>
                    <SummaryCard nom="Income"/>
                    <SummaryCard nom="Expenses"/>
                    <SummaryCard nom="Current balance"/>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className=" left-column col-span-2">
                             <div className="filter">
                                <div id="filters-card" class="card bg-white rounded-2xl shadow-md p-6 mb-6">
                                <div class="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                    <h3 class="text-lg font-semibold text-dark-gray mb-4 md:mb-0">Transaction Filters</h3>
                                    <div class="flex space-x-2">
                                        <button class="px-4 py-2 text-sm rounded-lg bg-primary text-white flex items-center">
                                            <i class="fa-solid fa-plus mr-2"></i>
                                            Add Transaction
                                        </button>
                                        <button class="p-2 rounded-lg border border-gray-200 text-light-gray">
                                            <i class="fa-solid fa-download"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {/**Date Range**/}
                                    <div>
                                        <label class="block text-sm text-light-gray mb-2">Date Range</label>
                                        <div class="relative">
                                            <select class="w-full p-3 bg-blue-gray rounded-lg appearance-none pr-10 border-0 focus:ring-2 focus:ring-primary">
                                                <option>Last 30 Days</option>
                                                <option>This Month</option>
                                                <option>Last Month</option>
                                                <option>Custom Range</option>
                                            </select>
                                            <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-light-gray">
                                                <i class="fa-solid fa-chevron-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/**Transaction Type**/}
                                    <div>
                                        <label class="block text-sm text-light-gray mb-2">Transaction Type</label>
                                        <div class="relative">
                                            <select class="w-full p-3 bg-blue-gray rounded-lg appearance-none pr-10 border-0 focus:ring-2 focus:ring-primary">
                                                <option>All Transactions</option>
                                                <option>Income</option>
                                                <option>Expense</option>
                                                <option>Transfer</option>
                                            </select>
                                            <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-light-gray">
                                                <i class="fa-solid fa-chevron-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/**Category**/}
                                    <div>
                                        <label class="block text-sm text-light-gray mb-2">Category</label>
                                        <div class="relative">
                                            <select class="w-full p-3 bg-blue-gray rounded-lg appearance-none pr-10 border-0 focus:ring-2 focus:ring-primary">
                                                <option>All Categories</option>
                                                <option>Shopping</option>
                                                <option>Food & Drinks</option>
                                                <option>Entertainment</option>
                                                <option>Transportation</option>
                                                <option>Others</option>
                                            </select>
                                            <div class="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-light-gray">
                                                <i class="fa-solid fa-chevron-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <TransactionsOverview/>
                        </div>
                    <div className="right-column col-span-1">
                        <DonutChart/>
                        <TransactionPreview/>
                    </div>
                    
                </div>
            </div>
           
        </div>
    )
}