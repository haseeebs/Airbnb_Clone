const Listing = require("../models/listingModel");
const wrapAsync = require("../utils/wrapAsync");

// Display all listings
// Route: GET /listings
// Access: Public
module.exports.getAllListings = wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
});

// Render new listing form
// Route: GET /listings/new
// Access: Public
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new");
};

// Show a specific listing
// Route: GET /listings/:id
// Access: Public
module.exports.showListing = wrapAsync(async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: { path: 'author' }
        })
        .populate('user', 'username');

    if (!listing) {
        req.flash("error", "Listing you requested for does not exist...");
        res.redirect("/listings");
    }
    res.render("listings/show", { listing });
});

// Create a new listing
// Route: POST /listings
// Access: Public
module.exports.createListing = wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    
    const filename = req.file.filename;
    const url = req.file.path;
    
    newListing.user = req.user._id;
    newListing.image = { filename, url };

    await newListing.save();
    
    req.flash("success", "New listing created...");
    res.redirect("/listings");
});

// Render edit listing form
// Route: GET /listings/:id/edit
// Access: Public
module.exports.renderEditForm = wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist...");
    }
    res.render("listings/edit", { listing });
});

// Update a listing
// Route: PUT /listings/:id
// Access: Public
module.exports.updateListing = wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, req.body.listing, { new: true });
    req.flash("success", "Listing updated...");
    res.redirect(`/listings/${id}`);
});

// Delete a listing
// Route: DELETE /listings/:id
// Access: Public
module.exports.deleteListing = wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success", `${deletedListing.title} listing deleted...`);
    res.redirect("/listings");
});