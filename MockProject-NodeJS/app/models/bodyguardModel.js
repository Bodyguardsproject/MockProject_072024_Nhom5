const { poolPromise, sql } = require('../../config/connect');

class Bodyguard {
    constructor(id_bodyguard, id_user, experience, availability_status, rating,
         hourly_rate, deflag, created_by, created_date, modified_by, modifile_date) {
            this.id_bodyguard = id_bodyguard;
            this.id_user = id_user;
            this.experience = experience;
            this.availability_status = availability_status;
            this.rating = rating;
            this.hourly_rate = hourly_rate;
            this.deflag = deflag;
            this.created_by = created_by;
            this.created_date = created_date;
            this.modified_by = modified_by;
            this.modifile_date = modifile_date;
    }

    static async getAll() {
        try {
            const pool = await poolPromise;
            const result = await pool.request().query('SELECT * FROM tbl_bodyguards');
            return result.recordset.map(record => new Bodyguard(record));
        } catch (err) {
            throw new Error(`Error fetching tbl_bodyguards: ${err.message}`);
        }
    }

    static async getById(id) {
        try {
            const pool = await poolPromise;
            const result = await pool.request()
                .input('id', sql.Int, id)
                .query('SELECT * FROM tbl_bodyguards WHERE id_bodyguard = @id');
            return result.recordset.length > 0 ? new Bodyguard(result.recordset[0]) : null;
        } catch (err) {
            throw new Error(`Error fetching bodyguard by ID: ${err.message}`);
        }
    }
}

module.exports = Bodyguard;