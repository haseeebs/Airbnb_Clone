// Importing necessary modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const { listingSchema } = require("./schema");

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
app.get("/listings", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
}));

// Display form to create a new listing
app.get("/listings/new", (req, res) => {
    res.render("listings/new");
});

// Create a new listing
app.post("/listings", wrapAsync(async (req, res, next) => {
    const result = listingSchema.validate(req.body);
    console.log(result);
    const newListing = new Listing(req.body.listing);
    console.log(newListing);
    await newListing.save();
    res.redirect("/listings");
}));

// Display form to edit a listing
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const data = await Listing.findById(id);
    res.render("listings/edit", { data });
}));

// Update a listing
app.put("/listings/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const newData = await Listing.findByIdAndUpdate(id, req.body, { new: true });
    // console.log(newData);
    res.redirect(`/listings/${id}`);
}));

// Display a specific listing
app.get("/listings/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show", { listing });
}));

// Delete a listing
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));

app.all("*" , (req , res , next) => {
    next(new ExpressError(404 , "No Page Found..."));
})


app.use((err, req, res, next) => {
    const {statusCode = 500 , message = "Somthing went wrong..."} = err;
    console.error(err + " This is the error handling middleware...")
    res.status(statusCode).render("listings/error" , {message});
})

// Start the server
app.listen(8080, () => {
    console.log("listening on port 8080");
});
