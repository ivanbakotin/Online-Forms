const pool = require("../db.js");

module.exports = async function checkOwner(user_id, form_id) {
  const form = await pool.query("SELECT user_id FROM user_forms WHERE id=$1", [
    form_id,
  ]);
  return user_id == form.rows[0]?.user_id;
};
