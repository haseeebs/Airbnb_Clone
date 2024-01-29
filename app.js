require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");

const listingRoutes = require("./routes/listingRoute");
const reviewRoutes = require("./routes/reviewRoute");
const userRoutes = require("./routes/userRoute");

const session = require("express-session");
const flash = require("connect-flash");

const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/userModel');

const sessionOptions = {
    secret: "AbeChalnaChuchiye",
    resave: false,
    saveUninitialized: true,
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Connect to the MongoDB database
main()
    .then(() => { console.log("Connected to Mini Airbnb database ") })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/miniAirbnb');
}

// Default route
app.get("/", (req, res) => {
    res.send("working on it....? haseeb: yeah bro");
});


app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user;
    next();
});


app.use('/', userRoutes);
app.use("/listings", listingRoutes);
app.use("/listings/:id/reviews", reviewRoutes);


// 404 Error Handling
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "No Page Found..."));
});


// Error Handling Middleware
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong..." } = err;
    console.error(err + " This is the error handling middleware...");
    res.status(statusCode).render("listings/error", { message });
});


// Start the server
app.listen(8080, () => {
    console.log("listening on port 8080");
});
