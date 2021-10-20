const pool = require("../db.js");

exports.get_forms = async function(req, res, next) {
    const result = await pool.query("SELECT * FROM user_forms WHERE user_id=$1", [req.user.id])

    return res.status(200).json(result.rows)
}

exports.create_form = async function(req, res, next) {
    const result = await pool.query("INSERT INTO user_forms (user_id) VALUES ($1) RETURNING id", [req.user.id])

    return res.status(200).json(result.rows[0].id)
}

exports.update_form = async function(req, res, next) {
    pool.query("UPDATE user_forms SET", [req.user.id, req.body.form_id])

    return res.status(200).json()
}
