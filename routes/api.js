const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Product = require('../models/product');

// Adăugare produs nou
router.post('/product', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imageUrl: req.body.imageUrl
    });

    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (err) {
        res.json({ message: err });
    }
});

// Înregistrare utilizator nou
router.post('/user/register', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
