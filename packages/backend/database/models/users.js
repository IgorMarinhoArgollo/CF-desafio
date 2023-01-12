/* eslint-disable max-lines-per-function */
const usersModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    phoneNumber: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    mobile: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    departament: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    verificationCode: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    emailChecked: {
      defaultValue: 0,
      type: DataTypes.TINYINT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    cashforceAdm: {
      defaultValue: 0,
      type: DataTypes.TINYINT,
    },
  }, {
    tableName: 'users',
  });

  User.associate = (models) => {
    User.hasOne(models.Order, { foreignKey: 'userId' });
  };

  return User;
};

module.exports = usersModel;