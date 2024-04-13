import { RevenueCard } from "./RevenueCard"
import { DATA } from "../assets/data";

export const Cards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                DATA.map((item, index) => {
                    return (
                        <div>
                            <RevenueCard key={index} title={item.title} orderCount={item.orders} amount={item.amount} nextDate={item.nextDate}/>
                        </div>
                    )
                })
            }
        </div>
    )
}