const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var promotionSchema = new Schema({
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
    }
}, {
    timestamps: true
});
var Promotions = mongoose.model('Promotion', promotionSchema);

module.exports = Promotions;