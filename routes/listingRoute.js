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


// Display all listings and Create a new listing
router.route('/')
    .get(getAllListings)
    .post(validateListing, isLoggedIn, createListing);


// Display form to create a new listing
router.get("/new", isLoggedIn, renderNewForm);


// Display a specific listing, update a listing and delete a listing
router.route('/:id')
    .get(showListing)
    .put(validateListing, isLoggedIn, isOwner, updateListing)
    .delete(isLoggedIn, isOwner, deleteListing);


// Display form to edit a listing
router.get("/:id/edit", isLoggedIn, isOwner, renderEditForm);


module.exports = router;