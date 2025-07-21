const express = require('express');
const Product = require('../model/Product');
const router = express.Router()
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) =>
        cb(null, Date.now() + path.extname(file.originalname))
})

const upload = multer({ storage })

router.post('/add', upload.single("image"), async (req, res) => {
    const { name, price, des } = req.body

    const product = new Product({
        name, price, des, image: req.file?.filename
    })

    await product.save()

    res.json(product)
})

router.get('/', async (req, res) => {

    const product = await Product.find()

    res.json(product)
})

router.get('/:id', async (req, res) => {

    const productId = req.params.id

    const product = await Product.findOne({ _id: productId })

    res.json({
        product
    })
})

module.exports = router