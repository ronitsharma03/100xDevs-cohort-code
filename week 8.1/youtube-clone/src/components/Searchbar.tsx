
export const Searchbar = () => {
    return <div className="">  
        <div className="max-sm:hidden block w-96 flex bg-zinc-900 text-gray border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2">
            <input id="default-search" className="w-full bg-transparent text-white border-none outline-none p-[2%] text-base" placeholder="Search" required />
            <button type="submit" className="w-15 overflow-hidden bg-transparent text-gray-400 font-bold px-4 py-2 rounded inline-flex items-center">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </button>
        </div>
        <div className="max-sm:block hidden absolute right-32 pt-2 pl-3 text-sm pr-2">
            <button type="submit" className="bg-transparent text-gray-400 font-bold px-4 py-2 inline-flex items-center">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </button>
        </div>
    </div>
}