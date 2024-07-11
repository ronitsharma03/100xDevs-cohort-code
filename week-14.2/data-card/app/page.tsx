
import axios from "axios";

interface User {
  name: string;
  email: String;
}

const getUserDetails = async () => {
  const response = await axios.get(
    " http://localhost:3000/api/user"
  );
  // await new Promise(r => setTimeout(r, 1000));
  return response.data;
};

export default async function Home() {
  // const userData = await getUserDetails();

  return (
    <div>
      <div className="h-screen w-full bg-slate-200 flex justify-center items-center">
            <div className="p-10 h-56 bg-white shadow-xl rounded-lg grid grid-rows-2">
                <div className="row-span-1 text-lg">
                   {/* ID: {userData?.id} */}
                </div>
                <div className="row-span-1 text-lg">
                    {/* E-mail: {userData?.email} */}
                </div>
            </div>
        </div>
    </div>
  );
}
