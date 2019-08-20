const express = require('express');
const path = require('path');
const apiRoutes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 2000;

// app.use(express.static(path.join(__dirname, 'app/public')));
app.use(express.static('app/public'));


app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.get("/", function (req, res) {
//     // res.send("Hello World");
//     res.sendFile("/app/public/home.html", function(err,data){

//     });
// });

const dataEntries = [];

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


app.listen(PORT, function () {
    console.log("App listening on PORT:" + PORT);
    console.log("http://localhost:" + PORT);
});