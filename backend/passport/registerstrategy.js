const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs")
const salt = bcrypt.genSaltSync(10)
const pool = require("../db.js");

const registerStrategy = new LocalStrategy({ passReqToCallback: true }, async (req, username, password, done) => {
    
    const encryptedpass = bcrypt.hashSync(password, salt)
    const res_user = await pool.query("SELECT id FROM users WHERE username = $1", [username])
    if (res_user.rows[0])  return done("User already exists", null)

    const res_username_id = await pool.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING username, id", [username, encryptedpass])
    pool.query("INSERT INTO userprofiles (user_id, username) VALUES ($1, $2)", [res_username_id.rows[0].id, res_username_id.rows[0].username])
    return done(null, username);
    
});

module.exports = registerStrategy;
