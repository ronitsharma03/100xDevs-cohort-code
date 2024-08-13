import { NextRequest, NextResponse } from "next/server";


// Extracting the routes from the params
export function GET(req: NextRequest, {params: {authRoutes}}: {params: {authRoutes: String[]}}) {
    console.log(authRoutes);
    return NextResponse.json({
        message: "Catch all routes"
    });
}

