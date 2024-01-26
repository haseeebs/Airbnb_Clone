const Listing = require("../models/listingModel");
const Review = require("../models/reviewModel");
const wrapAsync = require("../utils/wrapAsync");


// Create a new review for a listing
// Route: POST /listings/:id/reviews
// Access: Public
module.exports.createReview = wrapAsync(async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    const newReview = await new Review(req.body.review);

    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save()
    await listing.save()

    req.flash("success", "New review added...");
    res.redirect(`/listings/${listing.id}`);
})


// Delete a review for a listing
// Route: DELETE /listings/:id/reviews/:reviewId
// Access: Public
module.exports.destroyReview = wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;

    await Review.findByIdAndDelete(reviewId);
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });

    req.flash("success", "Review deleted...");
    res.redirect(`/listings/${id}`);
})