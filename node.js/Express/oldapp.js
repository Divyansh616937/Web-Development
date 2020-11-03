// const express = require("express")
// const path = require("path")
// const app = express();
// const port = 80;

 
// app.set('view engine', 'pug')

// app.set('views', path.join(__dirname, 'views'))

// app.get("/demo", (req, res)=>{
//     res.status(200).render('demo', { title: 'Hey', message: 'Hello there! I am here' })
// });
// //views

// app.use('/static', express.static('static'))

// app.get("/", (req, res)=>{
//     res.send("This is my first app")
// });

// app.get("/about", (req, res)=>{
//     res.send("This is my first about app")
// });


// app.post("/about", (req, res)=>{
//     res.send("This is my first post about app")
// });

// app.get("/status", (req, res)=>{
//     res.status(200).send("This is my first statsu app")
// });

// app.listen(port, ()=>{
//     console.log(`the appalication is successfully started on port :${port}`)
// });


////


const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render();
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
