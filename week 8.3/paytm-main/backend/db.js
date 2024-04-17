const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");


// Error handeling if any error occured while connecting to the mongodb database
try {
    mongoose.connect("mongodb+srv://devxronit:C32LC0cQuWkzm8mV@cluster1-paytm.w69dpt0.mongodb.net/Paytm");
}
catch(e){
    console.log("Cannot connect to database Error: " + e);
}


// Elegant userSchema better than simple schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3,
        maxLength: 30,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 30
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 30
    }
});

// Create a model from the UserSchema
const User = mongoose.model('User', userSchema);

// Export the model to use it in other files
module.exports = {
    User
}