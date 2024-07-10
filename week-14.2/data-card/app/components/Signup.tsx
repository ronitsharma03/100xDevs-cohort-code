"use client";
import axios from "axios";
import { ChangeEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

export function Signup() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();

  async function handleClick(){
    await axios.post("http://localhost:3000/api/user",{
        username,
        password
    });
    router.push("/");
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col shadow-lg px-16 py-20 max-w-96 bg-white rounded-lg">
        <LabelledInput
          placeholder="abc@gmail.com"
          label="Username"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <LabelledInput
          placeholder="123456"
          label="Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <div className="max-w-72 flex justify-center mt-5">
            <button onClick={handleClick} className="bg-blue-500 px-12 py-2 text-white rounded-lg mt-4 hover:bg-blue-400" type="submit">Signup</button>
        </div>
      </div>
    </div>
  );
}

function LabelledInput({
  placeholder,
  type,
  label,
  onChange,
}: LabelledInputType) {
  return (
      <div className="flex flex-col gap-3 w-full">
        <label className="mt-6">{label}</label>
        <input
          className="p-2 border rounded-lg"
          placeholder={placeholder}
          type={type || "text"}
          onChange={onChange}
          required
        />
      </div>
  );
}

interface LabelledInputType {
  placeholder: string;
  type?: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
