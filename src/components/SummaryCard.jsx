export function SummaryCard(props){

    return(     <div id="summary-cards" class="md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    <div class="card bg-white rounded-2xl shadow-md p-3 w-full">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <p class="text-light-gray text-sm">{props.nom}</p>
                                <h2 class="text-xl font-semibold text-dark-gray">$24,562.00</h2>
                            </div>
                            <div class="bg-primary-light p-3 rounded-lg text-primary">
                                <i class="fa-solid fa-wallet"></i>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <span class="flex items-center text-success text-sm">
                                <i class="fa-solid fa-arrow-up mr-1"></i>
                                2.5%
                            </span>
                            <span class="text-light-gray text-sm ml-2">from last month</span>
                        </div>
                    </div>
                </div>
                    
                    );
    }
        
       