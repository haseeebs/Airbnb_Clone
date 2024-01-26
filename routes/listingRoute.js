
const express = require("express");
const router = express.Router();
const { isLoggedIn, isOwner, validateListing } = require("../middleware");

const {
    getAllListings,
    renderNewForm,
    showListing,
    createListing,
    renderEditForm,
    updateListing,
    deleteListing
} = require("../controllers/listingController");


// Display all listings
router.get("/", getAllListings);


// Display form to create a new listing
router.get("/new", isLoggedIn, renderNewForm);


// Display a specific listing
router.get("/:id", showListing);


// Create a new listing
router.post("/", validateListing, isLoggedIn, createListing);


// Display form to edit a listing
router.get("/:id/edit", isLoggedIn, isOwner, renderEditForm);


// Update a listing
router.put("/:id", validateListing, isLoggedIn, isOwner, updateListing);


// Delete a listing
router.delete("/:id", isLoggedIn, isOwner, deleteListing);


module.exports = router;