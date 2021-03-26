const express = require('express')
const app = express()
const path = require('path')

app.use(express.urlencoded({extended: false}))
// app.use(getWeather);

app.set("view engine", "ejs")
// path aint specified?? why??
// re-watch the vid to figure out why it aint working
app.set("views", path.join(__dirname, "views"))

function getWeather(req, res, next){
    req.visitorWeather = true;
    if(req.visitorWeather == false){
        res.send("Please come back to us when it's not raining");
    } else {
        next();
    }
}

app.get("/", getWeather, (req, res) => {
    // it's having a hard time rendering the thing below
    // i put app instead of res
    res.render("home", {
        isRaining: req.visitorWeather,
        pets: [
            {name: "Meowsalot", species: "cat"},
            {name: "Barker", species: "dog"}
        ]
    })
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

app.get('/api/pets', (req, res) => {
    res.json([
        {name: "Meowsalot", species: "cat"},
        {name: "Barker", species: "dog"}
    ])
})

app.listen(8080)

// continue copying video