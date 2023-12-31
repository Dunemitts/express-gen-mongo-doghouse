const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const dogSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {   
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    treat: {
        type: String,
        required: true,
        trim: true
    }
});

mongoose.model('dogs', dogSchema);