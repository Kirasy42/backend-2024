const express = require("express");

const app = express();


app.get("/", (req , res) => {
    res.send("Hello, Express!");
});

app.listen(PORT, () => console.log(`Server is running on https://localhost:${PORT}`));
