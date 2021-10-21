const pool = require("../db.js");

exports.get_forms = async function(req, res, next) {
    const result = await pool.query("SELECT * FROM user_forms WHERE user_id=$1", [req.user.id])

    return res.status(200).json(result.rows)
}

exports.get_form_info = async function(req, res, next) {
    const result = await pool.query(`SELECT * FROM user_forms AS u
                                    LEFT JOIN forms AS f
                                        ON u.id = f.form_id
                                    LEFT JOIN questions AS q
                                        ON q.id = f.question_id
                                    LEFT JOIN questions_questions AS qq
                                        ON qq.id = q.questions_questions_id
                                    WHERE u.user_id=$1 AND u.id=$2`, [req.user.id, req.body.id])
    console.log(result.rows)
    //return res.status(200).json(result.rows[0])
}

exports.create_form = async function(req, res, next) {
    const result = await pool.query("INSERT INTO user_forms (user_id) VALUES ($1) RETURNING id", [req.user.id])

    return res.status(200).json(result.rows[0].id)
}

exports.update_form_main = async function(req, res, next) {
    pool.query("UPDATE user_forms SET", [req.user.id, req.body.form_id])

    return res.status(200).json()
}

exports.update_form_questions = async function(req, res, next) {
    pool.query("UPDATE user_forms SET", [req.user.id, req.body.form_id])

    return res.status(200).json()
}

