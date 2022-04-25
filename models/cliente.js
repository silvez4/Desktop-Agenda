// const { DataTypes } = require("sequelize/types");

const Clientes = sequelize.define('cliente', {
  nome: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  nascimento: {
    type: Sequelize.STRING
  },
  cpf: {
    type: Sequelize.STRING
  },
  rg: {
    type: Sequelize.STRING
  },
  // id: DataTypes.NUMBER,
  // nome: DataTypes.STRING,
  // email: DataTypes.STRING,
  // nascimento: DataTypes.STRING,
  // cpf: DataTypes.STRING,
  // rg: DataTypes.STRING
})

Clientes.sync()
Clientes.create({
  nome: 'Gabriel',
  email: 'g@teste.com',
  nascimento: '2000-01-01',
  cpf: '047.000.000-00',
  rg: '12.123.543-2'
}).then(Clientes.findAll().then((clientes) => {
  clientes.forEach(cliente => {
    console.log('=============');
    console.log('nome: ' + cliente.nome);
    console.log('email: ' + cliente.email);
    console.log('nascimento: ' + cliente.nascimento);
    console.log('cpf: ' + cliente.cpf);
    console.log('rg: ' + cliente.rg);
    console.log('=============');
  });
}).catch((err) => {
  console.log('Erro Mysql: ' + err)
}))