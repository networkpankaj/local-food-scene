const express = require('express');
const Review = require('../models/Review');
const auth = require('../middleware/auth');

const router = express.Router();

// Post a Review
router.post('/', auth, async (req, res) => {
    const { restaurantId, rating, comment } = req.body;

    try {
        const newReview = new Review({
            userId: req.user.id,
            restaurantId,
            rating,
            comment,
        });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status( 500).json({ error: 'Failed to post review' });
    }
});

// Get Reviews for a Restaurant
router.get('/:restaurantId', async (req, res) => {
    const restaurantId = req.params.restaurantId;

    try {
        const reviews = await Review.find({ restaurantId });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
});

module.exports = router;