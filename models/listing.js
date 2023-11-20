const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    image : {
        type : String,
        default : "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set : (value) => (value === "" ? "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : value)
    },
    price : {
        type : Number
    },
    location : {
        type : String
    },
    country : {
        type : String
    },
});

const Listing = mongoose.model("Listing" , listingSchema);

module.exports = Listing;