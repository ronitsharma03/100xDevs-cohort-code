import { Searchbar } from "./Searchbar"

export const Appbar = () => {
    return <div className="flex justify-between pt-5 p-3 pb-5 sticky top-0 bg-black">
        <div className="inline-flex items-center text-2xl font-medium tracking-tighter">
            <span className="ml-7 mr-2 [&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ff0000]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                        d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                </svg>
            </span>

            Youtube
        </div>
        <div>
            <Searchbar />
        </div>
        <div className="flex justify-between gap-2 border border-slate-500 p-2 pr-3 pl-3 rounded-3xl inline-flex items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-500 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <button className="text-blue-500 text-lg">
                Sign in
            </button>

        </div>
    </div>
}