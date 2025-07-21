require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
const mongoose = require('mongoose')
const cors = require('cors')
const authRoutes = require('./routes/auth')
const productRoutes = require('./routes/product')

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'));
mongoose.connect(process.env.MONGO_URI)    .then(() => {
        console.log("Mongoose Connection is Done!!!")
    })
    .catch((err) => {
        console.log(err)
    })

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/auth', authRoutes)
app.use('/api/product', productRoutes)

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
