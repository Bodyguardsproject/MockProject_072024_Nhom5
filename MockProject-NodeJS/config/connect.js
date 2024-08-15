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

// Tạo và lưu trữ đối tượng Promise của kết nối
const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to SQL Server');
        return pool; // Trả về pool để sử dụng trong các truy vấn
    })
    .catch(err => {
        console.error('Database connection failed:', err);
        process.exit(1);
    });

module.exports = {
    sql,
    poolPromise
};
