/* eslint-disable max-lines-per-function */
const offersModel = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
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
    tableName: 'offers',
  });

  Offer.associate = (models) => {
    Offer.hasOne(models.Sponsor, { as: 'sponsor', foreignKey: 'sponsorId' });
  };

  Offer.associate = (models) => {
    Offer.hasOne(models.Order, { as: 'order', foreignKey: 'orderId' });
  };
  
  return Offer;
};

module.exports = offersModel;