const mongoose = require('mongoose');

// Define the schema for news and updates
const ourPlacementSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    course: {
        type: String,
        required: true,
    }
});

// Create the model from the schema
const ourPlacement = mongoose.model('ourplacement', ourPlacementSchema);

// Export the model for use in other parts of the application
module.exports = ourPlacement;
