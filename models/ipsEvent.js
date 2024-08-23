const mongoose = require('mongoose');

// Define the schema for news and updates
const ipsEventSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true
    }
});

// Create the model from the schema
const ipsEvent = mongoose.model('ipsEvent', ipsEventSchema);

// Export the model for use in other parts of the application
module.exports = ipsEvent;
