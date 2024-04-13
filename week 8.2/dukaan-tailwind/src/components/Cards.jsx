import { RevenueCard } from "./RevenueCard"
import { DATA } from "../assets/data";

export const cards = () => {
    return (
        <div>
            {
                DATA.map((item, index) => {
                    return (
                        <div>
                            <RevenueCard key={index} title={item.title} orderCount={item.orderCount} amount={item.amount} nextDate={item.nextDate}/>
                        </div>
                    )
                })
            }
        </div>
    )
}