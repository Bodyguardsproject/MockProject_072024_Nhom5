const { poolPromise, sql } = require('../../config/connect');

class User{
    static async getAll() {
        try {
            const pool = await poolPromise;
            const result = await pool.request().query('SELECT id_user, first_name, last_name, address, email, date_of_birth, gender, phone, status '+
                 'FROM tbl_user JOIN tbl_user_has_role ON tbl_user.id_user = tbl_user_has_role.user_id WHERE role_id = 4');
            return result.recordset;
        } catch (err) {
            throw new Error(`Error fetching tbl_users: ${err.message}`);
        }
    }

}
module.exports = User;