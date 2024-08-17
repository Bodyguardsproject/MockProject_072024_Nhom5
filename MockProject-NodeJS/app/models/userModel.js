const { poolPromise, sql } = require('../../config/connect');

class User{
    constructor({ id_user, email, password }) {
        this.id_user = id_user;
        this.username = email;
        this.password = password;
    }
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

    static async findByEmail(email) {
        try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('email', sql.VarChar, email)
            .query('SELECT id_user, email, password FROM tbl_user WHERE email = @email');
        return result.recordset.length ? new User(result.recordset[0]) : null;
        } catch (err) {
            throw new Error(`Error finding user by email: ${err.message}`);
        }
    }

    static async create(userData) {
        try {
            const pool = await poolPromise;
            const result = await pool.request()
                .input('first_name', sql.VarChar, userData.first_name)
                .input('last_name', sql.VarChar, userData.last_name)
                .input('phone', sql.VarChar, userData.phone)
                .input('email', sql.VarChar, userData.email)
                .input('address', sql.VarChar, userData.address)
                .input('password', sql.VarChar, userData.password)
                .query(`
                    INSERT INTO tbl_user (first_name, last_name, phone, email, address, password, status)
                    VALUES (@first_name, @last_name, @phone, @email, @address, @password, 'Inactive');
                    SELECT SCOPE_IDENTITY() AS id_user;
                `);
            return { id: result.recordset[0].id_user };
        } catch (err) {
            throw new Error(`Error creating user: ${err.message}`);
        }
    }
    

    static async updateStatus(userId, status) {
        try {
            const pool = await poolPromise;
            await pool.request()
                .input('id_user', sql.Int, userId)
                .input('status', sql.VarChar, status)
                .query(`
                    UPDATE tbl_user
                    SET status = @status
                    WHERE id_user = @id_user;
                `);
        } catch (err) {
            throw new Error(`Error updating user status: ${err.message}`);
        }
    }

    static async findById(userId) {
        try {
            const pool = await poolPromise;
            const result = await pool.request()
                .input('id_user', sql.Int, userId)
                .query(`
                    SELECT * FROM tbl_user
                    WHERE id_user = @id_user;
                `);
            return result.recordset[0];
        } catch (err) {
            throw new Error(`Error finding user by ID: ${err.message}`);
        }
    }

}
module.exports = User;