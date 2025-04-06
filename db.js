const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',     // Reemplazá con el host que te dio DonWeb
  user: 'c2791005_natura',          // Reemplazá con tu usuario de DonWeb
  password: '11VUlikego',   // Reemplazá con la contraseña de DonWeb
  database: 'c2791005_natura'    // Reemplazá con el nombre de la base
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectarse a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL correctamente');
});

module.exports = connection;
