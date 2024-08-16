import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth"; 
import Appbar from "../components/Appbar";

export default async function (){
    const serverSession = await getServerSession(NEXT_AUTH );
    return (
        <div>
            <Appbar />
            Server component: {JSON.stringify(serverSession)}
        </div>
    )
}