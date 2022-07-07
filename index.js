const express = require("express");

const app = express();
const PORT = 5000;
const router = require("./routerCont/item")
const connect = require("./src/db/config");
connect()

app.use(express.json());
app.use(router)


app.get("/", (req, res) => {
    try {
        // console.log("api is running");
        res.send("api is running")
    } catch (error) {
        console.log('error:', error)

    }
})
app.post("/api/additem", (req, res) => {
    try {
        res.send(itemMaster.push(Payload))
        console.log('itemMaster:', itemMaster)
    } catch (error) {
        console.log('error:', error)

    }
})

app.listen(PORT, () => {
    try {
        console.log(`listening on port ${PORT}...`);
    } catch (error) {
        console.log('error:', error)

    }
});