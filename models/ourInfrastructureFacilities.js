const mongoose = require('mongoose');

// Define the schema for news and updates
const ourInfrastructureSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }
});

// Create the model from the schema
const ourInfrastructureFacilities = mongoose.model('ourInfrastructureFacilities', ourInfrastructureSchema);

// Export the model for use in other parts of the application
module.exports = ourInfrastructureFacilities;
