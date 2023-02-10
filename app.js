const express = require('express')
const app = express()
const port = 3000
const routes = require("./router")
const mongoose = require('mongoose');
// expreee routes
app.use("/" , routes);
// for default
app.get('/', (req, res) => res.send('Hello World!'))
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/portfolio" , { useNewUrlParser: true,
   useUnifiedTopology: true ,
   family: 4,
})
.then(() => console.log("Connection Successfully"))
.catch((err) => console.log(err , 101));

// mongoose.connect("mongodb://localhost:27017/portfolio", {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
// }).then(() => console.log("Welcome"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));