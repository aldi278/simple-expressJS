const express = require('express')
const { productsController } = require('../controller')

const router = express.Router()

router.get('/products', productsController.getProducts)
router.post('/products', productsController.addData)
router.patch('/products', productsController.changeData)
router.delete('/products', productsController.deleteData)


module.exports = router