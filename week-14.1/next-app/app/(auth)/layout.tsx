import React, { Children } from "react";

export default function Layout({children}:{
    children: React.ReactNode
}){
    return (
        <div>
            <div className="p-4 text-center border-b bg-slate-100">
                20% OFF, ONLY FOR TODAY!
            </div>
            {children}
        </div>
    )
}