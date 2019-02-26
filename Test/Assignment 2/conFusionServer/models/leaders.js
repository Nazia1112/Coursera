const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var leaderSchema = new Schema({
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
    designation: {
        type: String
        
    },
    abbr: {
        type: String
        
    },
    featured: {
        type: Boolean,
        default:false      
    }
}, {
    timestamps: true
});
var Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;