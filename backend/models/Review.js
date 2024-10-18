const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true },
    restaurantId: { type: String, required: true }, // Assuming restaurant ID is a string
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);