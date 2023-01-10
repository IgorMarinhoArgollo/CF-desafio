/* eslint-disable max-lines-per-function */
const orderportionsModel = (sequelize, DataTypes) => {
  const Orderportion = sequelize.define('OrderPortion', {
    id: DataTypes.INTEGER,
    tax: DataTypes.STRING,
    tariff: DataTypes.STRING,
    adValorem: DataTypes.STRING,
    float: DataTypes.STRING,
    iof: DataTypes.STRING,
    expiresIn: DataTypes.DATE,
    paymentStatusSponsor: DataTypes.INTEGER,
    paymentStatusProvider: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    orderId: DataTypes.INTEGER,
    sponsorId: DataTypes.INTEGER,
  }, {
    tableName: 'orderportions',
  });

  Orderportion.associate = (models) => {
    Orderportion.hasOne(models.Sponsor, { as: 'sponsor', foreignKey: 'sponsorId' });
  };

  Orderportion.associate = (models) => {
    Orderportion.hasOne(models.Order, { as: 'order', foreignKey: 'orderId' });
  };

  return Orderportion;
};

module.exports = orderportionsModel;