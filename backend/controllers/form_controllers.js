const pool = require("../db.js");

exports.get_forms = async function(req, res, next) {
    const result = await pool.query("SELECT * FROM user_forms WHERE user_id=$1", [req.user.id])

    return res.status(200).json(result.rows)
}
