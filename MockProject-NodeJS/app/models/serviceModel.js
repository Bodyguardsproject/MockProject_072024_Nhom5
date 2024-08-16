const { poolPromise, sql } = require('../../config/connect');

class Service{
    static async getAll() {
        try {
            const pool = await poolPromise;
            const result = await pool.request().query('SELECT id_service, name, image, description FROM tbl_service');
            return result.recordset;
        } catch (err) {
            throw new Error(`Error fetching tbl_users: ${err.message}`);
        }
    }

    static async getById(id) {
        try {
            const pool = await poolPromise;
            const result = await pool.request()
                .input('id', sql.Int, id)
                .query('SELECT id_service, name, image, description FROM tbl_service WHERE id_service = @id');
            return result.recordset.length > 0? result.recordset[0] : null;
        } catch (err) {
            throw new Error(`Error fetching service by ID: ${err.message}`);
        }
    }

}
module.exports = Service;