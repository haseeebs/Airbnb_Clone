const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const listingRoutes = require("./routes/listing");
const reviewRoutes = require("./routes/review");

// Setting up the view engine and middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);

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

// Use the listing routes
app.use("/listings", listingRoutes);
// Use the review routes
app.use("/listings/:id/reviews" , reviewRoutes);

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
