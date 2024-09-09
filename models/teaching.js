const mongoose = require('mongoose');

// Define the schema for news and updates
const teachingSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        trim: true
    }
});

// Create the model from the schema
const teaching = mongoose.model('teaching', teachingSchema);

// Export the model for use in other parts of the application
module.exports = teaching;
