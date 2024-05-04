const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const errorHandler = require("./middleware/errorHandler");

const app = express();

let PORT = process.env.PORT || 3000;
let cors = require("cors");

// middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ type: 'application/*+json' }));

// Api
app.post("/contact", (req, res) => {
    const { postJson } = req.body;
    const postData = JSON.parse(postJson);

    const { name, email, number, getInTouch, message } = postData;

    if (!name || !email || !number || !getInTouch || !message) {
        res.status(400);
        throw new Error("Please fill in all fields!");
    }
    res.status(200).json({ msg: "Request Sent Successfully!" });
});

app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

