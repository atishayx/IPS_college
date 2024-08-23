const mongoose = require('mongoose');

// Define the schema for news and updates
const newsAndUpdateSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
        default: Date.now // Automatically set the current date if not provided
    },
    text: {
        type: String,
        required: true,
        trim: true // Remove any extra whitespace from the beginning and end of the text
    }
});

// Create the model from the schema
const NewsAndUpdate = mongoose.model('NewsAndUpdate', newsAndUpdateSchema);

// Export the model for use in other parts of the application
module.exports = NewsAndUpdate;
