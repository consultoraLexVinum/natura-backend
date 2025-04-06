const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'c2791005_natura',
  password: '11VUlikego',
  database: 'c2791005_natura'
});

conexion.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

module.exports = conexion;
