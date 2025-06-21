import { BarCharts } from "../components/BarChart";
import { Card } from "../components/Card";
import { SummaryCard } from "../components/summaryCard";

export function Dashboard(){
    return(
        <div id="Dashboard">
            <div className="body p-5">
                <div className="cards grid grid-cols-4 gap-4 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1">
                    <SummaryCard nom="Total balance"/>
                    <SummaryCard nom="Income"/>
                    <SummaryCard nom="Expenses"/>
                    <SummaryCard nom="Savings"/>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="col-span-2">
                        <BarCharts/>
                        <div id="card-display" class="card bg-white rounded-2xl shadow-md p-6 mb-6">
                              <div class="flex justify-between items-center mb-6">
                                <h3 class="text-lg font-semibold text-dark-gray">Your Cards</h3>
                                <button class="text-primary text-sm flex items-center">
                                    <span>Add new card</span>
                                    <i class="fa-solid fa-plus ml-2"></i>
                                </button>
                            </div>
                            <div className="flex space-x-4 overflow-x-auto pb-4">
                                <Card id={1234123412341234} owner="Yvan Nguestop Donfack" balance={120000} expire="09/28" color="primary"/>
                                <Card id={1234123412341234} owner="Yvan Nguestop Donfack" balance={120000} expire="09/28" color="black"/>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
           
        </div>
    )
}