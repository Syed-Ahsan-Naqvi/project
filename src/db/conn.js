const mongoose = require("mongoose")

require('dotenv').config();

// const apiKey = process.env.MONGODB_STR
// console.log(apiKey)


// mongoose.connect("mongodb+srv://<SyedAhsan>:<ahsan123>@<users>/test?retryWrites=true&w=majority", {
mongoose.connect(process.env.MONGODB_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.warn(`Connection Successfull`)
}).catch((e) => {
    console.warn(`no connection`)
})

// const uri = "mongodb+srv://<SyedAhsan>:<ahsan123>@<Cluster0>/test?retryWrites=true&w=majority";
