const express = require("express")
const cors = require("cors")
const path = require("path")
const bodyParser = require('body-parser');


const app = express()

const corsOptions = {

    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}


require("./src/db/conn");

// const static_path = path.join(__dirname, "./Paryatana-main");
// const static_path = path.join(__dirname, "./Paryatana-main");

const Register = require("./src/models/register")

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(static_path))


app.post("/register", async (req, res) => {
    try {
        console.warn(req.body.firstname)
        console.warn(req.body.E_Mail_Addresse)
        // res.send(req.body.firstname)

        const registerEmployee = new Register({
            firstname: req.body.firstname,
            E_Mail_Addresse: req.body.E_Mail_Addresse,
        })
        await registerEmployee.save()
        // res.status(200).render("index")
        res.status(200).send("Success")

    } catch (error) {
        res.status(400).send(error)
    }
})

// port
const PORT = process.env.PORT || 8000

// server
app.listen(PORT, () => {
    console.warn(`Server is running on ${PORT}`)
})



