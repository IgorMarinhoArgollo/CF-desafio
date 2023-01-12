/* eslint-disable max-lines-per-function */
const BuyersModel = (sequelize, DataTypes) => {
  const Buyer = sequelize.define('Buyer', {
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
    tradingName: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    cashforceTax: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    responsibleName: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    responsibleEmail: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    responsiblePosition: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    responsiblePhone: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    responsibleMobile: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    website: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    postalCode: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    address: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    number: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    complement: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    neighborhood: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    city: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    state: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    phoneNumber: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    situation: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    situationDate: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    cnpjId: {
      defaultValue: null,
      type: DataTypes.INTEGER,
    },
    confirm: {
      allowNull: false,
      defaultValue: 1,
      type: DataTypes.TINYINT,
    },
    email: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'buyers',
  });

  Buyer.associate = (models) => {
    Buyer.belongsTo(models.Cnpj, { foreignKey: 'cnpjId' });
    Buyer.hasMany(models.Order, { foreignKey: 'buyerId' });
  };
  
  return Buyer;
};

module.exports = BuyersModel;