// Requiring our models and passport as we've configured it
require("dotenv").config();
var db = require("../models");
var passport = require("../config/passport");
const axios = require("axios").default;
module.exports = function (app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json(req.user);
    });
    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function (req, res) {
        db.User.create({
                email: req.body.email,
                password: req.body.password
            })
            .then(function () {
                res.redirect(307, "/api/login");
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });
    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });
    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });
    // app.get("/api/video/:id", function (req, res) {
    //     console.log("Hello");
    //     db.Video.findOne({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function (result) {
    //         res.json(result.data);
    //     }).catch(err => {
    //         console.log(err);
    //         res.json(err);
    //     });
    // });
    app.get("/api/video/:id", function (req, res) {
        db.Video.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result);
        });
    });
    app.get("/api/video/search/:keyword", function (req, res) {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${res}&type=video&key=${process.env.key}`).then(function (response) {
            console.log(response);
            res.json(response.data);
        }).catch(response => res.json(response));
    });
    app.post("/api/addVid", function (req, res) {
        db.Video.create({
                title: req.body.title,
                video_url: req.body.video_url,
                rec_date: req.body.rec_date,
                keyword: req.body.keyword
            })
            .then(function () {
                res.redirect(307, "/api/login");
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });
};