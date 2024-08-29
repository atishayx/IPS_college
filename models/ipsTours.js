const mongoose = require('mongoose');

// Define the schema for news and updates
const ipsToursSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
        trim: true
    }
});

// Create the model from the schema
const ipsTours = mongoose.model('ipstours', ipsToursSchema);

// Export the model for use in other parts of the application
module.exports = ipsTours;
