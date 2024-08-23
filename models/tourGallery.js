const mongoose = require('mongoose');

// Define the schema for news and updates
const tourSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    }
});

// Create the model from the schema
const tour = mongoose.model('tour', tourSchema);

// Export the model for use in other parts of the application
module.exports = tour;
