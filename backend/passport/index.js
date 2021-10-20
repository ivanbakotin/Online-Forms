const passport = require("passport");
const loginStrategy = require("./loginstrategy.js")
const registerStrategy = require("./registerstrategy.js")
const pool = require("../db.js");

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(username, done) {
    pool.query("SELECT * FROM users WHERE username=$1", [username], function(err, result) {
        done(err, result.rows[0]) 
    })
});

passport.use("local-login", loginStrategy);
passport.use("local-register", registerStrategy);

module.exports = passport;
