const mongoose = require("mongoose");
const Listing = require("../models/listing.js")
const sampleListings = require("./data.js");

// Connect to the MongoDB database
main()
    .then(() => { console.log("Connected to Mini Airbnb database ") })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/miniAirbnb');
};


const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(sampleListings);
    console.log("Data was initialized...");
}

initDB();