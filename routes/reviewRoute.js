const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listingModel");
const Review = require("../models/reviewModel");
const { reviewSchema } = require("../schema");
const ExpressError = require("../utils/ExpressError");


// Middleware for validating a review
const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error);
    } else {
        next();
    }
}

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