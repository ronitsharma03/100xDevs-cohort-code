import { Searchbar } from "./Searchbar"

export const Appbar = () => {
    return <div className="flex justify-between pt-2 p-3">
        <div className="inline-flex items-center">
            Youtube
        </div>
        <div>
            <Searchbar />
        </div>
        <div className="flex justify-between gap-2 border border-slate-500 p-2 pr-3 pl-3 rounded-3xl inline-flex items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-blue-500 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <button className="text-blue-500 text-lg">
                Sign in
            </button>

        </div>
    </div>
}