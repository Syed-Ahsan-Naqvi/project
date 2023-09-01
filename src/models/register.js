const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,

    },
    E_Mail_Addresse: {
        type: String,

    },
})

// now we need to create a collection

const Register = new mongoose.model("Register", employeeSchema)

module.exports = Register;