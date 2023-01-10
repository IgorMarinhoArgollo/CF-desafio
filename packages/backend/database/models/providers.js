/* eslint-disable max-lines-per-function */
const prodidersModel = (sequelize, DataTypes) => {
  const Provider = sequelize.define('Provider', {
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
    bank: DataTypes.STRING,
    bankAgency: DataTypes.STRING,
    account: DataTypes.STRING,
    documents: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    situation: DataTypes.STRING,
    situationDate: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    cnpjId: DataTypes.INTEGER,
    email: DataTypes.STRING,
  }, {
    tableName: 'providers',
  });

  Provider.associate = (models) => {
    Provider.hasOne(models.Cnpj, { as: 'cnpj', foreignKey: 'cnpjId' });
  };

  Provider.associate = (models) => {
    Provider.belongsTo(models.Order, { as: 'order', foreignKey: 'providerId' });
  };

  return Provider;
};

module.exports = prodidersModel;