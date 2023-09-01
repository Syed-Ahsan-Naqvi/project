const mongoose = require("mongoose")

// mongoose.connect("mongodb+srv://<SyedAhsan>:<ahsan123>@<users>/test?retryWrites=true&w=majority", {
mongoose.connect("mongodb+srv://SyedAhsan:ahsan123@cluster0.0ua8hqy.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.warn(`Connection Successfull`)
}).catch((e) => {
    console.warn(`no connection`)
})

// const uri = "mongodb+srv://<SyedAhsan>:<ahsan123>@<Cluster0>/test?retryWrites=true&w=majority";
