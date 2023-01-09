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

  return Orderportion;
};

module.exports = orderportionsModel;