import { BarCharts } from "../components/BarChart";
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
                    <BarCharts/>
                </div>
            </div>
           
        </div>
    )
}