const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')
const PATH = './data/products.json'

const {productsRouter} = require('./router')


const PORT = 2021

const app = express()

app.use(cors())
app.use(bodyParser())

app.use('/data', productsRouter)

// let products = JSON.parse(fs.readFileSync(PATH))




// app.get("/products",(req,res) => {
//     res.status(200).send(products)
// })

// app.post("/products", (req,res) => {
//     console.log(req.body)
//     products.push(req.body)

//     fs.writeFileSync(PATH,JSON.stringify(products))
    
//     res.status(200).send(JSON.parse(fs.readFileSync(PATH)))
// })

// app.patch("/products", (req,res) => {
//     let idx = products.findIndex(item => item.id == req.query.id)

//     for(let prop in products[idx]){
//         for(let bodyProp in req.body){
//             if(prop == bodyProp){
//                 products[idx][prop] = req.body[bodyProp]
//             }
//         }
//     }

//     fs.writeFileSync(PATH,JSON.stringify(products))

//     res.status(200).send(JSON.parse(fs.readFileSync(PATH)))
// })

// app.put("/products", (req,res) => {
//     let idx = products.findIndex(item => item.id == req.query.id)

//     products[idx] = req.body

//     fs.writeFileSync(PATH,JSON.stringify(products))

//     res.status(200).send(JSON.parse(fs.readFileSync(PATH)))
// })

// app.delete("/products", (req,res) => {
//     let idx = products.findIndex(item => item.id == req.query.id)

//     products.splice(idx,1)

//     fs.writeFileSync(PATH,JSON.stringify(products))

//     res.status(200).send(JSON.parse(fs.readFileSync(PATH)))
// })


app.listen(PORT, () => console.log("server up"))