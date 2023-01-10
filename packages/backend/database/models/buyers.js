/* eslint-disable max-lines-per-function */
const BuyersModel = (sequelize, DataTypes) => {
  const Buyer = sequelize.define('Buyer', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    tradingName: DataTypes.STRING,
    cashforceTax: DataTypes.STRING,
    responsibleName: DataTypes.STRING,
    responsibleEmail: DataTypes.STRING,
    responsiblePosition: DataTypes.STRING,
    responsiblePhone: DataTypes.STRING,
    responsibleMobile: DataTypes.STRING,
    website: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.STRING,
    complement: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    situation: DataTypes.STRING,
    situationDate: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    cnpjId: DataTypes.INTEGER,
    confirm: DataTypes.INTEGER,
    email: DataTypes.STRING,
  }, {
    tableName: 'buyers',
  });

  Buyer.associate = (models) => {
    Buyer.hasOne(models.Cnpj, { as: 'cnpj', foreignKey: 'cnpjId' });
  };

  Buyer.associate = (models) => {
    Buyer.belongsTo(models.Order, { as: 'order', foreignKey: 'buyerId' });
  };
  
  return Buyer;
};

module.exports = BuyersModel;