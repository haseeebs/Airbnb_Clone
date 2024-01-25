const Listing = require("./models/listingModel");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash('error', 'You must be to logged in to perform this action!');
        return res.redirect('/login');
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (res.locals.currentUser && !res.locals.currentUser._id.equals(listing.user._id)) {
        req.flash('error', 'You are not owner of this listing');
        return res.redirect(`/listings/${id}`)
    }
    next();
}