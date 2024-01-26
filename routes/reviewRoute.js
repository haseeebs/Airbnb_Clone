const express = require("express");
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");
const { createReview, destroyReview } = require("../controllers/reviewsController");

// Add a review to a listing
router.post("/", isLoggedIn, validateReview, createReview)

// Delete a review from a listing
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, destroyReview)

module.exports = router;