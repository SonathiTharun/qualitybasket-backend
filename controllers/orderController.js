const Order = require('../models/order');  // Correct path to your order model


const createOrder = async (req, res) => {
    const { user, products, total } = req.body;

    try {
        const newOrder = await Order.create({ user, products, total });
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error });
    }
};

module.exports = { createOrder };
