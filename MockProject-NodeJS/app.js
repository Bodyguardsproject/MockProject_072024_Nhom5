const express = require('express');
const app = express();

const bodyguardRoutes = require('./app/routes/bodyguardRoutes'); 
const userRoutes = require('./app/routes/userRoutes');
const serviceRoutes = require('./app/routes/serviceRoutes');

app.use(express.json());

app.use('/api/bodyguards', bodyguardRoutes);
app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);

// Khởi động server
app.listen(3000, function () {
    console.log(`Server is running on http://127.0.0.1:3000`);
});
