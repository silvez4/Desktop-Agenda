const Sequelize = require('sequelize')

var db_config = {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'bdturismo'
}

var sequelize = new Sequelize('mysql://' + db_config.user + ':' + db_config.password + '@' + db_config.host + ':' + db_config.port + '/' + db_config.database + '')

sequelize.authenticate().then(() => {
  console.log('database: ' + db_config.database + ' Conectado')
}).catch((err) => {
  console.log('Erro ao estabelecer Conexão' + err);
})

// usando mysql na pagina
// *******
// document.getElementById("bdcon").addEventListener("click", () => {
//   var mysql = require("mysql")

//   var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: null,
//     database: "bdturismo"
//   });
//   connection.connect((err) => {
//     if (err) {
//       return console.log(err.stack);
//     }
//     console.log("Conexão Estabelecida")
//   });

//   //aqui sera feita as querys q ao ser finalizada serão encerradas abaixo
//   //
//   $queryString = 'SELECT * from `cliente`;';
//   connection.query($queryString, (err, rows, fields) => {
//     if (err) {
//       return console.log("Erro na Query", err);
//     }
//     console.log(rows);
//   });

//   connection.end(() => {
//     console.log("Conexão Finalizada");
//   });
// }, false);