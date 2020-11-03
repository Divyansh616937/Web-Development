const { dir } = require("console")
const express = require("express")
const { dirname } = require("path")
const app = express()
const path = require("path")
const port = 80

//set the template engile for pug
app.set('view engine', 'pug')

//set the views direcitory
app.set('views', path.join(__dirname, 'views'))

//Our pug demo endpoint
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
});

app.use('/static', express.static('static'))

app.get('/', (req, res)=>{
    res.status(200).send("Thi is a message ")
})

app.get("/about",(req, res)=>{
    res.send("This is th maessage for the send mrequst is successfully")
})

app.post('/about', (req, res)=>{
    res.send("this is a message of that the send requst successfully for port")
})

app.get("/this",(req,res)=>{
    res.status(400).send("this is the page not found request")
})

app.listen(port, ()=>{
    console.log(`the appalication is successfully on port${port}`)
})