const pool = require("../db.js");
// PG FORMAT

exports.get_forms = async function(req, res, next) {
    const result = await pool.query("SELECT * FROM user_forms WHERE user_id=$1", [req.user.id])

    return res.status(200).json(result.rows)
}

exports.get_form_info = async function(req, res, next) {
    const result = await pool.query(`SELECT u.*, jsonb_agg(DISTINCT q.*), json_agg(DISTINCT qq.*) FROM user_forms AS u
                                    INNER JOIN questions AS q
                                        ON q.form_id = u.id
                                    INNER JOIN questions_questions AS qq
                                        ON qq.question_id = q.question_id
                                    WHERE u.user_id=$1 AND u.id=$2
                                    GROUP BY u.id`, 
                                    [req.user.id, req.body.id])
    console.log(result.rows[0])
    return res.status(200).json(result.rows[0])
}

exports.create_form = async function(req, res, next) {
    const result = await pool.query("INSERT INTO user_forms (user_id) VALUES ($1) RETURNING id", [req.user.id])

    return res.status(200).json(result.rows[0].id)
}

exports.update_form_main = async function(req, res, next) {
    pool.query(`UPDATE user_forms 
                SET form_title=$1, descrip=$2
                WHERE user_id=$3 AND id=$4`, 
                [req.body.info.form_title, req.body.info.descrip, req.user.id, req.body.id])

    return res.status(200).json()
}

exports.update_form_questions = async function(req, res, next) {
 
    // ADD CHECK IF REQ.USER.ID OWNER OF FORM
    req.body.questions.forEach(quest => {
        pool.query(`INSERT INTO questions
                        (form_id, question_id, quest_title, question_type) VALUES 
                        ($1, $2, $3, $4)`, 
                        [req.body.id, quest.id, quest.quest_title, quest.type], (result, err) => {
                if (result) {
                    if (result.code == "23505") {
                        pool.query(`UPDATE questions 
                                    SET quest_title=$1
                                    WHERE form_id=$2 AND question_id=$3`, 
                                    [quest.quest_title, req.body.id, quest.id])
                    }
                }
        })
        quest.checkbox_list.forEach(check => {
            pool.query(`INSERT INTO questions_questions 
                        (qq_id, qq_title, question_id) VALUES 
                        ($1, $2, $3)`, 
                        [check.id, check.qq_title, quest.id], (result, err) => {
                if (result) {
                    if (result.code == "23505") {
                        pool.query(`UPDATE questions_questions 
                                    SET qq_title=$1 
                                    WHERE question_id=$2 AND qq_id=$3`, 
                                    [check.qq_title, quest.id, check.id])
                    }
                }
            })
        })
    })

    return res.status(200).json()
}
