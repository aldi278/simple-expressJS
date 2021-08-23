const fs = require('fs')

module.exports = {
    getProducts : (req,res) => {
        let products = fs.readFileSync('./data/products.json')
        res.status(200).send(JSON.parse(products))
    },
    addData : (req,res) => {
        let products = JSON.parse(fs.readFileSync('./data/products.json'))
        products.push(req.body)
        fs.writeFileSync('./data/products.json',JSON.stringify(products))
        res.status(200).send(JSON.parse(fs.readFileSync('./data/products.json')))
    },
    changeData : (req,res) => {
        let products = JSON.parse(fs.readFileSync('./data/products.json'))
        let idx = products.findIndex(item => item.id == req.query.id)
        for(let prop in products[idx]){
            for(let bodyProp in req.body){
                if(prop == bodyProp){
                    products[idx][prop] = req.body[bodyProp]
                }
            }
        }
    
        fs.writeFileSync('./data/products.json',JSON.stringify(products))
    
        res.status(200).send(JSON.parse(fs.readFileSync('./data/products.json')))

    },
    deleteData : (req,res) => {
        let products = JSON.parse(fs.readFileSync('./data/products.json'))

        let idx = products.findIndex(item => item.id == req.query.id)

        products.splice(idx,1)

        fs.writeFileSync('./data/products.json',JSON.stringify(products))
    
        res.status(200).send(JSON.parse(fs.readFileSync('./data/products.json')))

    }
}