const { dir } = require("console")
const express = require("express")
const { dirname } = require("path")
const app = express()
const path = require("path")
const fs = require("fs")
const port = 80
 
//EXPRESS SPECFIV STUFF
app.use('/static', express.static('static'))
app.use(express.urlencoded())

//PUG SPEFIC STUFF
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

//End Points
app.get('/', (req, res)=>{
    const con = "this is the variable"
    const params = {'title':'PUb is the best', "content":con}
    res.status(200).render('index.pug', params)
})

app.post('/',(req,res)=>{
    name = req.body.name
    email = req.body.name
    let = outputtowrie = `name of the client is ${name} and email is ${email}`
    
    const params = {'message':'you form has been sumbitted'}
    res.status(200).render('index.pug', params)

})
//Start server
app.listen(port, ()=>{
    console.log(`the appalication is successfully on port${port}`)
})