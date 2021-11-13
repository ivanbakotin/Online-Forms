const path = require("path")
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const passport = require("./passport/index.js");
const session = require('express-session')
const auth_routes = require("./routes/auth_routes.js");
const all_routes = require("./routes/all_routes.js");
const pool = require("./db.js");
const PORT = process.env.PORT || 8080;

const pgSession = require('connect-pg-simple')(session)

const authCheck = (req, res, next) => {
    if (req.user) next();
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const sessionMiddleware = session({
    name: 'profile_session',
    secret: "231134234",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 24 * 1000 },
    store: new pgSession({
        pool: pool,
        tableName : 'session',
        ttl: 60 * 60 * 24,  // 1 day
        pruneSessionInterval: 60
    })
});

app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", auth_routes);
app.use("/api", authCheck, all_routes);

http.listen(PORT, () => console.log(`Server started on ${PORT}`));

//app.use(express.static(path.join(__dirname, "build")));
//
//app.get( `*`, (req, res, next) => {
//  res.sendFile(path.join(__dirname, "build", "index.html"));
//});

module.exports = app;

/*
    expand textarea -- rows
    add saving portal popup while settimeout active
    pagination on all forms page
    form validation errors
    response page
    styling
    skeleton loading
*/
