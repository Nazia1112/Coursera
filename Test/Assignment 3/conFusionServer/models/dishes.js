const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var commentSchema = new Schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5,
    },
    comment:  {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

var dishSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    category: {
        type: String
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        min: 0
    },
    featured: {
        type: Boolean,
        default:false      
    },
    comments:[commentSchema]
}, {
    timestamps: true
});
var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;