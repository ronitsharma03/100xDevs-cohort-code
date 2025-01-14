import express from "express";

const app = express();
app.use(express.json());

const otpStore: Record<string, string> = {};
app.post("/generate-otp", (req: any, res: any) => {

    const email = req.body.email;
    if(!email){
        return res.status(400).json({
            message: "Email is required"
        });
    }

    const otp = Math.floor(10000 + Math.random() * 90000).toString();
    otpStore[email] = otp;
    console.log(`OTP for the ${email} is ${otp}`);
    return res.json({
        message: "Otp generated successfully!",
       });

});

// endpoint to reset the password
app.post("/reset-password", (req :any, res: any) => {
    const { email, otp, newPassword } = req.body;
    if(!email || !otp || !newPassword){
        return res.status(400).json({
            message: "Otp amd email and new Password are required"
        });
    }

    if(otpStore[email] === otp){
        console.log(`Password for the ${email} has ben reset to ${newPassword}`);
        delete otpStore[email];
        res.status(200).send({
            message: "Password has been reset successfully"
        });
    }else{
        return res.status(500).json({
            message: "Error while resetting the password"
        });
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000....");
})