const pool = require("../db.js");

exports.get_forms = async function(req, res, next) {
    const result = await pool.query(`SELECT * FROM user_forms 
        	                        WHERE user_id=$1`, 
                                    [req.user.id])

    return res.status(200).json(result.rows)
}

exports.get_form_info = async function(req, res, next) {
    const result = await pool.query(`
        SELECT json_build_object('form', json_agg(p))
            FROM (
               SELECT *,
                 (
                   SELECT json_agg(row_to_json(c))
                   FROM (
                        SELECT *,
                            (
                                SELECT json_agg(row_to_json(w))
                                FROM (
                                    SELECT *
                                    FROM questions_questions AS qq
                                    WHERE qq.question_id = q.question_id AND qq.form_id=$2 ORDER BY qq.qq_id ASC
                                ) w
                            )  sub_questions
                          FROM questions AS q WHERE q.form_id = u.id ORDER BY q.question_id ASC
                        ) c
                 ) AS questions
               FROM user_forms AS u WHERE u.user_id=$1 AND u.id=$2
        ) p`, 
        [req.user.id, req.body.id])

    if (result.rows[0].json_build_object.form[0].questions === null) {
        result.rows[0].json_build_object.form[0].questions = []
    }

    return res.status(200).json(result.rows[0].json_build_object.form[0])
}

exports.create_form = async function(req, res, next) {
    const result = await pool.query(`INSERT INTO user_forms (user_id, form_title) 
        	                        VALUES ($1, $2) 
                                    RETURNING id`, 
                                    [req.user.id, "Form Title"])

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
    console.log(req.body.questions)
    // ADD CHECK IF REQ.USER.ID OWNER OF FORM
    req.body.questions.forEach(quest => {
        pool.query(`INSERT INTO questions
                        (form_id, question_id, quest_title, question_type) 
                        VALUES ($1, $2, $3, $4)`, 
                        [req.body.id, quest.question_id, quest.quest_title, quest.question_type], (result, err) => {
                if (result) {
                    if (result.code == "23505") {
                        pool.query(`UPDATE questions 
                                    SET quest_title=$1
                                    WHERE form_id=$2 AND question_id=$3`, 
                                    [quest.quest_title, req.body.id, quest.question_id])
                    }
                }
        })
        quest?.sub_questions.forEach(check => {
            pool.query(`INSERT INTO questions_questions 
                        (form_id, qq_id, qq_title, question_id) 
                        VALUES ($1, $2, $3, $4)`, 
                        [req.body.id, check.qq_id, check.qq_title, quest.question_id], (result, err) => {
                if (result) {
                    if (result.code == "23505") {
                        pool.query(`UPDATE questions_questions 
                                    SET qq_title=$1 
                                    WHERE question_id=$2 AND qq_id=$3 AND form_id=$4`, 
                                    [check.qq_title, quest.question_id, check.qq_id, req.body.id])
                    }
                }
            })
        })
    })

    return res.status(200).json()
}
