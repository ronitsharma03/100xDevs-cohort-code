
export const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
    return (
        <div className="bg-white w-[33%] grid grid-cols-3 shadow-md border rounded-xl p-4 m-10">
            <div className="text-gray-700 col-span-3 text-lg flex justify-start">
                {title}
                <div className="ml-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
            </div>
            <div className="w-full flex justify-between mt-5 col-span-3">
                <div className="text-3xl font-semibold">
                    {amount}
                </div>
                <div className="text-base inline-flex items-center underline text-blue-700 tracking-wide cursor-pointer">
                    {orderCount} order(s)
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}