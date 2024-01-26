const User = require("../models/userModel");
const wrapAsync = require("../utils/wrapAsync");

// Render the sign-up form
// Route: GET /signup
// Access: Public
module.exports.renderSignUpForm = (req, res) => {
    res.render('users/signup.ejs');
}

// Handle user sign-up
// Route: POST /signup
// Access: Public
module.exports.signup = wrapAsync(async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const newUser = new User({ username, email });

        const registeredUser = await User.register(newUser, password);

        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to wanderlust...');
            res.redirect('/listings');
        });
    } catch (error) {
        req.flash('error', error.message);
        res.redirect('/signup');
    }
});

// Render the login form
// Route: GET /login
// Access: Public
module.exports.renderLoginForm = (req, res) => {
    res.render('users/login');
}

// Handle user login
// Route: POST /login
// Access: Public
module.exports.userLogin = async (req, res) => {
    req.flash('success', 'Welcome back to wanderlust...');

    res.redirect(res.locals.redirectUrl || '/listings');
}

// Handle user logout
// Route: GET /logout
// Access: Public
module.exports.userLogout = (req, res) => {
    req.logout(err => {
        if (err) {
            return next(err);
        }
        req.flash('success', "You're now logged out!");
        res.redirect('/listings');
    });
}
