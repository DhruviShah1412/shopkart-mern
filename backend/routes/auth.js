const express = require('express');
const User = require('../model/User');
const bcrypt = require('bcrypt')
const router = express.Router()
const jwt = require('jsonwebtoken')
const JWT_SECRET = "1";

router.post('/', async (req, res) => {
    console.log(req.body, "req.body")
    const { email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        console.log("Received signup:", email, password)
        const user = await User.create({ email, password: hashedPassword, role });
        res.json({ message: "Registered successfully" })
    }
    catch (err) {
        res.status(400).json({ error: 'User already exists' });
    }
})

router.post('/login', async (req, res) => {
    console.log(req.body, "req.body")
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });


    const token = jwt.sign(
        { id: user._id, email: user.email },
        JWT_SECRET,
        { expiresIn: '1h' })

    res.json({
        token,
        user: {
            email: user.email,
            userId: user._id,
            role: user.role
        }
    })

})

router.get('/profile/:id', async (req, res) => {

    const userId = req.params.id

    const user = await User.findOne({ _id: userId })
   
    res.json({
        user
    })
})
module.exports = router