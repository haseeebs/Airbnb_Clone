const express = require('express');
const router = express.Router();

const passport = require('passport');
const { saveRedirectUrl } = require('../middleware');

const {
    renderSignUpForm,
    signup,
    renderLoginForm,
    userLogin,
    userLogout
} = require('../controllers/userController');


// Display the sign-up form and handle user signup
router.route('/signup').get(renderSignUpForm).post(signup);


// Display the login form and handle user login
router.route('/login').get(renderLoginForm)
    .post(saveRedirectUrl,
        passport.authenticate('local', {
            failureRedirect: '/login',
            failureFlash: true
        }), userLogin)


// Handle user logout
router.get('/logout', userLogout)

module.exports = router;