const express = require('express');
const User = require('../models/userModel');
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const router = express.Router();

// GET and POST routes for user signup
router.route('/signup')
    .get((req, res) => {
        res.render('users/signup.ejs')
    })
    .post(wrapAsync(async (req, res) => {
        try {
            const { username, email, password } = req.body;
            
            const newUser = new User({ username, email });

            const registeredUser = await User.register(newUser, password);

            req.flash('success', 'Welcome to wanderlust...');
            res.redirect('/listings');
        } catch (error) {
            req.flash('error', error.message);
            res.redirect('/signup')
        }
    }));

router.route('/login')
    .get((req, res) => {
        res.render('users/login');
    })
    .post(passport.authenticate('local',
    { failureRedirect: '/login', failureFlash: true }),
    async (req, res) => {
            req.flash('success' , 'Welcome back to wanderlust...');
            res.redirect('/listings');
        })

module.exports = router;