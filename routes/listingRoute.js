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

const multer = require('multer');
const { storage } = require("../cloudConfig");
const upload = multer({ storage });

// Display all listings and Create a new listing
router.route('/')
    .get(getAllListings)
    .post(isLoggedIn, upload.single('listing[image]'), validateListing, createListing);


// Display form to create a new listing
router.get("/new", isLoggedIn, renderNewForm);


// Display a specific listing, update a listing and delete a listing
router.route('/:id')
    .get(showListing)
    .put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, updateListing)
    .delete(isLoggedIn, isOwner, deleteListing);


// Display form to edit a listing
router.get("/:id/edit", isLoggedIn, isOwner, renderEditForm);


module.exports = router;