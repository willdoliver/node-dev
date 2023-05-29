const mongoose = require("mongoose")

const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name cannot be more then 20 chars']
    },
    race: {
        type: String,
        enum: [
            'Viralata',
            'Pitbull',
            'Salsicha',
            'Husky',
        ],
        required: [true, 'must provide their race']
    },
    age: {
        type: Number,
        required: [true, 'age cannot be empty my friend'],
        min: 0,
        max: [20, 'Really!? please insert the real age']
    },
    vaccine: {
        type: String,
        enum: {
            values: [
                'Verme',
                'Gripe',
                'Giardia',
                'Raiva',
            ],
            message: '{VALUE} is not supported'
        },
        required: false
    },
    adopted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

module.exports = mongoose.model('Dog', DogSchema)