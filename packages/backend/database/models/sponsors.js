/* eslint-disable max-lines-per-function */
const sponsorsModel = (sequelize, DataTypes) => {
  const Sponsor = sequelize.define('Sponsor', {
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
    phoneNumber: DataTypes.STRING,
    situation: DataTypes.STRING,
    situationDate: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    cnpjId: DataTypes.INTEGER,
    email: DataTypes.STRING,
  }, {
    tableName: 'sponsors',
  });

  Sponsor.associate = (models) => {
    Sponsor.hasOne(models.Cnpj, { as: 'cnpj', foreignKey: 'cnpjId' });
  };

  Sponsor.associate = (models) => {
    Sponsor.belongsTo(models.Offer, { as: 'offer', foreignKey: 'sponsorId' });
  };

  Sponsor.associate = (models) => {
    Sponsor.belongsTo(models.Orderportion, { as: 'orderportion', foreignKey: 'orderId' });
  };

  return Sponsor;
};

module.exports = sponsorsModel;