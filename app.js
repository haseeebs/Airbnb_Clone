// Importing necessary modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

// Setting up the view engine and middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true })); // Middleware to parse the request body
app.engine("ejs", ejsMate);

// Connect to the MongoDB database
main()
    .then(() => { console.log("Connected to Mini Airbnb database ") })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/miniAirbnb');
}

// Default route
app.get("/", (req, res) => {
    res.send("workking on it....? haseeb : yeah bro");
});

// Display all listings
app.get("/listings", async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index", { allListing });
});

// Display form to create a new listing
app.get("/listings/new", (req, res) => {
    res.render("listings/new");
});

// Create a new listing
app.post("/listings", async (req, res) => {
    const newData = req.body;
    const newListing = new Listing(newData);
    await newListing.save();
    res.redirect("/listings");
});

// Display form to edit a listing
app.get("/listings/:id/edit", async (req, res) => {
    const { id } = req.params;
    const data = await Listing.findById(id);
    res.render("listings/edit", { data });
});

// Update a listing
app.put("/listings/:id", async (req, res) => {
    const { id } = req.params;
    const newData = await Listing.findByIdAndUpdate(id, req.body, { new: true });
    console.log(newData);
    res.redirect(`/listings/${id}`);
});

// Display a specific listing
app.get("/listings/:id", async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show", { listing });
});

// Delete a listing
app.delete("/listings/:id", async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});

// Start the server
app.listen(8080, () => {
    console.log("listening on port 8080");
});
