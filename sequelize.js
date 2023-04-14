const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING
}, {
  paranoid: true
});

(async () => {
  await sequelize.sync({ force: true });

  const user = await User.create({
    name: 'John',
    email: 'john@example.com'
  });

  // Excluindo o registro logicamente
  await User.destroy({ where: { id: user.id } });

  // Verificando se o registro ainda existe na tabela (não deve existir)
  const deletedUser = await User.findByPk(user.id);
  console.log(deletedUser); // null

  // Restaurando o registro
  await User.restore({ where: { id: user.id } });

  // Verificando se o registro foi restaurado (deve existir novamente)
  const restoredUser = await User.findByPk(user.id);
  console.log(restoredUser); // { id: 1, name: 'John', email: 'john@example.com'}
})();
