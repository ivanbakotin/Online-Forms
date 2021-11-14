const pool = require("../db.js");

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
                                    WHERE qq.question_id = q.question_id AND qq.form_id=$1 ORDER BY qq.qq_id ASC
                                ) w
                            )  sub_questions
                          FROM questions AS q WHERE q.form_id = u.id ORDER BY q.question_id ASC
                        ) c
                 ) AS questions
               FROM user_forms AS u WHERE u.id=$1
        ) p`, 
        [req.body.id])

    if (result.rows[0].json_build_object.form[0].questions === null) {
        result.rows[0].json_build_object.form[0].questions = []
    }

    return res.status(200).json(result.rows[0].json_build_object.form[0])
}

exports.send_filled_form = async function(req, res, next) {

    pool.query (`
            SELECT * FROM user_solved
            ORDER BY id DESC
            LIMIT 1
    `, (error, result) => {

        if (error) {
            console.log(error)
        }

        req.body.questions.forEach(quest => {
            pool.query(`INSERT INTO user_solved 
                        (form_id, question_id, index_id, answer) 
                        VALUES ($1, $2, $3, $4)
                        RETURNING id`, 
                        [quest.form_id, quest.question_id, result.rows[0].id + 1, quest.answer])
        })
    });

    return res.status(200).json()
}
