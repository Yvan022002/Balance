export function Card(props){

    return(   <div>
                          
                            <div id="card" class="flex">
                                <div class={`min-w-[320px] h-[200px] rounded-3xl bg-${props.color} text-white p-6 flex flex-col justify-between`}>
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <p class="text-xs opacity-80">Current Balance</p>
                                            <p class="text-xl font-semibold">${props.balance}</p>
                                        </div>
                                        <div class="text-2xl">
                                            <i class="fa-brands fa-cc-visa"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="text-lg tracking-wider mb-2">**** **** **** {(props.id).toString().slice(-4)}</p>
                                        <div class="flex justify-between items-center">
                                            <div>
                                                <p class="text-xs opacity-80">Card Holder</p>
                                                <p class="text-sm">{props.owner}</p>
                                            </div>
                                            <div>
                                                <p class="text-xs opacity-80">Expires</p>
                                                <p class="text-sm">{props.expire}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>)
}