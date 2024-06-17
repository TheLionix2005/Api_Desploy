const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'tecnoventas-proyect.mysql.database.azure.com',
    user: 'tecnoventas',
    password: 'Formacionsena*',
    database: 'tecnoventas',


});

db.connect(function (err) {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida correctamente');
});

module.exports = db;
