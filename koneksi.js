var mysql = require('mysql');

//buat koneksi db

const con = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'nodejs'
});

con.connect((err) => {
     if (err) throw err;
     console.log('mysql terkoneksi');
})

module.exports = conn;