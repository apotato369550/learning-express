const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.send(`
    <h1>What color is the sky on a clear day?</h1>
    <form action="/result" method="POST">
        <input type="text" name="color">
        <button type="submit">Submit</button>
    </form>
    `);
})

app.get("/about", (req, res) => {
    res.send("Thanks for wanting to learn more about us:D");
})

app.post("/result", (req, res) => {
    if(req.body.color.trim().toLowerCase() === "blue"){
        res.send("Congratulations! Correct!")
    } else {
        res.send("Incorrect, please try again.")
    }
})

app.get("/result", (req, res) => {
    res.send("tf u doing here??")
})

app.listen(8080)

// continue here