const mongoose = require('mongoose');

// Define the schema for news and updates
const ourTopRankersSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
        trim: true
    },
    years: {
        type: String,
        required: true,
    }
});

// Create the model from the schema
const ourTopRankers = mongoose.model('ourtoprankers', ourTopRankersSchema);

// Export the model for use in other parts of the application
module.exports = ourTopRankers;
