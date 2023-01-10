/* eslint-disable max-lines-per-function */
const usersModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    mobile: DataTypes.STRING,
    departament: DataTypes.STRING,
    verificationCode: DataTypes.STRING,
    emailChecked: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    cashforceAdm: DataTypes.INTEGER,
  }, {
    tableName: 'users',
  });

  User.associate = (models) => {
    User.belongsTo(models.Order, { as: 'order', foreignKey: 'userId' });
  };

  return User;
};

module.exports = usersModel;