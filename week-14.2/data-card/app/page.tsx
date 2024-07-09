"use client";
import axios from "axios";
import { Loader } from "./components/loader";
import { useState } from "react";

interface User {
  name: string;
  email: String;
}

const getUserDetails = async () => {
  const response = await axios.get(
    " https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );
  return response.data;
};

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div>
      <div className="h-screen w-full bg-slate-200 flex justify-center items-center">
            <div className="p-10 h-56 bg-white shadow-xl rounded-lg grid grid-rows-2">
                <div className="row-span-1 text-lg">
                   Name: {userData?.name}
                </div>
                <div className="row-span-1 text-lg">
                    E-mail: {userData?.email}
                </div>
            </div>
        </div>
    </div>
  );
}
