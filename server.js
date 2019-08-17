const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 2000;

app.use(express.static(path.join(__dirname, 'app/public')))

app.get("/", function(req,res){
    res.send("Hello World");
});

app.listen(PORT, function () {
 console.log("App listening on PORT:" + PORT);
 console.log("http://localhost:" + PORT);
});