//Require Mongoose to create the Article Schema and Model
import mongoose from 'mongoose';

var Schema = mongoose.Schema;

// Define schema for articles
var ArticleSearch = new Schema({
    title: {
        type: Number
    },
    date: {
        type: Date
    },
    url: {
        type: String
    }
});

// Creation of the model
var Search = mongoose.model("Search", ArticleSearch);

// Export the model for availability
module.exports = Search;
