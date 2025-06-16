import { NavLink } from "react-router-dom"

export function SideBar(){
    return(<div id="sidebar" class="w-60 bg-blue-gray border-r border-gray-200 h-full flex flex-col">
            <div class="p-6 flex items-center border-b border-gray-200">
                <div class="text-primary text-2xl mr-2">
                    <i class="fa-solid fa-wallet"></i>
                </div>
                <h1 class="text-xl font-semibold text-dark-gray">FinTrack</h1>
            </div>
            
            <div class="overflow-y-auto flex-1">
                <nav>
                    <ul class="py-4">
                        <li class="px-4 py-2">
                            <span class="nav-item active flex items-center px-3 py-3 rounded-lg cursor-pointer">
                                <i class="fa-solid fa-home w-6 h-6 text-center"></i>
                                <NavLink to="/Dashboard" class="ml-3 font-medium">Dashboard</NavLink>
                            </span>
                        </li>
                        <li class="px-4 py-2">
                            <span class="nav-item flex items-center px-3 py-3 rounded-lg text-dark-gray cursor-pointer">
                                <i class="fa-solid fa-exchange-alt w-6 h-6 text-center"></i>
                                <NavLink to="/Transactions" class="ml-3">Transactions</NavLink>
                            </span>
                        </li>
                        <li class="px-4 py-2">
                            <span class="nav-item flex items-center px-3 py-3 rounded-lg text-dark-gray cursor-pointer">
                                <i class="fa-solid fa-credit-card w-6 h-6 text-center"></i>
                                <NavLink to="/Cards" class="ml-3">Cards</NavLink>
                            </span>
                        </li>
                        <li class="px-4 py-2">
                            <span class="nav-item flex items-center px-3 py-3 rounded-lg text-dark-gray cursor-pointer">
                                <i class="fa-solid fa-user-friends w-6 h-6 text-center"></i>
                                <NavLink to="/Contacts" class="ml-3">Contacts</NavLink>
                            </span>
                        </li>
                        <li class="px-4 py-2">
                            <span class="nav-item flex items-center px-3 py-3 rounded-lg text-dark-gray cursor-pointer">
                                <i class="fa-solid fa-chart-line w-6 h-6 text-center"></i>
                                
                                <NavLink to="/Analytics" class="ml-3">Analytics</NavLink>
                            </span>
                        </li>
                        <li class="px-4 py-2">
                            <span class="nav-item flex items-center px-3 py-3 rounded-lg text-dark-gray cursor-pointer">
                                <i class="fa-solid fa-cog w-6 h-6 text-center"></i>
                                
                                <NavLink to="/Settings" class="ml-3">Settings</NavLink>
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <div class="p-4 border-t border-gray-200">
                <div class="flex items-center">
                    <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="Profile" class="w-10 h-10 rounded-full"/>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-dark-gray">Alex Morgan</p>
                        <p class="text-xs text-light-gray">alex@example.com</p>
                    </div>
                </div>
            </div>
        </div>
        )
}