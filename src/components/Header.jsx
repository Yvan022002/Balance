export function Header(){
    return(
            <header id="header" class="bg-white border-b border-gray-200 py-4 px-8 flex justify-between items-center">
                <h1 class="text-2xl font-bold text-dark-gray">Dashboard</h1>
                <div class="flex items-center space-x-4">
                    <button class="p-2 rounded-full hover:bg-blue-gray text-light-gray">
                        <i class="fa-solid fa-search"></i>
                    </button>
                    <button class="p-2 rounded-full hover:bg-blue-gray text-light-gray">
                        <i class="fa-solid fa-bell"></i>
                    </button>
                    <button class="p-2 rounded-full hover:bg-blue-gray text-light-gray">
                        <i class="fa-solid fa-cog"></i>
                    </button>
                </div>
            </header>)
}