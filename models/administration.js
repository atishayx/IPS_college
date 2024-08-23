const mongoose = require('mongoose');

// Define the schema for news and updates
const adminstrationSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    }
});

// Create the model from the schema
const administration = mongoose.model('administration', adminstrationSchema);

// Export the model for use in other parts of the application
module.exports = administration;
