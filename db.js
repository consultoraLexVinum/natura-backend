const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'c279.ferozo.com',       // ✅ Este es el host correcto
  user: 'c2791005_natura',
  password: '11VUlikego',
  database: 'c2791005_natura'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectarse a MySQL:', err);
    return;
  }
  console.log('Conexión exitosa a MySQL');
});

module.exports = connection;
