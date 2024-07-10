"use client";
import { ChangeEventHandler, useState } from "react";
import Button from "./Button";

export default function Signup() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

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
        <Button text={"Signup"} />
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
