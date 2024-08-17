const sql = require('mssql');

const config = {
    server: 'localhost\\SQLEXPRESS',
    port: 1433,
    database: 'bodyguard',
    user: 'sa',
    password: 'sa123',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};
// Create and store the connection pool Promise object
const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to SQL Server');
        return pool; // Return the pool to be used in queries
    })
    .catch(err => {
        console.error('Database connection failed:', err);
        process.exit(1);
    });

module.exports = {
    sql,
    poolPromise
};
