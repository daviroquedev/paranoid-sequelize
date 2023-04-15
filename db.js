const { Sequelize, DataTypes } = require("sequelize");
//Passando URI para conexão opção 1

const sequelize = new Sequelize(
  "postgres://digitalcollege:6MXbyWfaOelGQR3WtI6y43utpQjdjMRK@dpg-cgt1gfiut4mcfrjnd650-a.oregon-postgres.render.com/biblioteca_p5or",
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);
//Dessa forma foi necessario carregar a opcao ssl

// testa a conexão

async function testeConexao() {
  try {
    await sequelize.authenticate();
    console.log("Conectado");
  } catch (e) {
    console.log(e);
  }
}
testeConexao();

//criar schema para o usuario
const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    paranoid: true,
  }
);

// Sicroniza e alter se diiferente
async function sicronizacao() {
  await User.sync({ alter: true });
  //console.log(User)
}
sicronizacao();

// //Cria novo usuario
// async function criarNovoUsuario() {
//   const novousuario = await User.create({
//     nome: "jose",
//     email: "jose@com",
//     senha: "123456",
//   });
//   console.log(novousuario);
// }

// criarNovoUsuario();

// (async () => {
//   await User.destroy({ where: { nome: "jose" } });

//   // Verificando se o registro ainda existe na tabela (não deve existir)
//   //   const deletedUser = await User.findAll({ where: { nome: "Sicrano" } });
//   //   console.log(deletedUser); // null

//   // Restaurando o registro
//   //await User.restore({ where: { nome: "Sicrano" } });

//   // Verificando se o registro foi restaurado (deve existir novamente)
//   //const restoredUser = await User.findAll({ where: { nome: "Sicrano" } });
//   //console.log(restoredUser);
// })();

// async function destroy() {
//  await User.destroy({ where: { nome: "jose" } });
// }
// destroy();

// Verificando se o registro ainda existe na tabela (não deve existir)
// async function verifyDeleted() {
//   const deletedUser = await User.findAll({ where: { nome: "jose" } });
//   console.log(deletedUser); // null
// }
// verifyDeleted();

// Restaurando o registro
// async function restoreDeleted() {
//   await User.restore({ where: { nome: "jose" } });
// }
// restoreDeleted();

// async function verifyUser() {
//   // Verificando se o registro foi restaurado (deve existir novamente)
//   //const restoredUser = await User.findAll({ where: { nome: "jose" } });
//   //console.log(verifyUser);
// }
