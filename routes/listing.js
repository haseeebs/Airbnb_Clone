const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const { listingSchema } = require("../schema");
const ExpressError = require("../utils/ExpressError");


// Middleware for validating a listing
const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error);
    } else {
        next();
    }
}

// Display all listings
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
}));

// Display form to create a new listing
router.get("/new", (req, res) => {
    res.render("listings/new");
});

// Create a new listing
router.post("/", validateListing, wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    console.log(newListing);
    await newListing.save();
    res.redirect("/listings");
}));

// Display form to edit a listing
router.get("/:id/edit", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const data = await Listing.findById(id);
    res.render("listings/edit", { data });
}));

// Update a listing
router.put("/:id", validateListing, wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, req.body.listing, { new: true });
    res.redirect(`/listings/${id}`);
}));

// Display a specific listing
router.get("/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show", { listing });
}));

// Delete a listing
router.delete("/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));

module.exports = router;
