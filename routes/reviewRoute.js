const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listingModel");
const Review = require("../models/reviewModel");
const { validateReview } = require("../middleware");

// Add a review to a listing
router.post("/", validateReview, wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    const newReview = await new Review(req.body.review).save();
    listing.reviews.push(newReview);

    await listing.save()
    req.flash("success" , "New review added...");
    res.redirect(`/listings/${listing.id}`);
}))

// Delete a review from a listing
router.delete("/:reviewId", wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Review.findByIdAndDelete(reviewId);
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    req.flash("success" , "Review deleted...");
    res.redirect(`/listings/${id}`);
}))

module.exports = router;