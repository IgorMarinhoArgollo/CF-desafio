/* eslint-disable max-lines-per-function */
const ordersModel = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: DataTypes.INTEGER,
    orderNfId: DataTypes.STRING,
    orderNumber: DataTypes.STRING,
    orderPath: DataTypes.STRING,
    orderFileName: DataTypes.STRING,
    orderOriginalName: DataTypes.STRING,
    emissionDate: DataTypes.STRING,
    pdfFile: DataTypes.STRING,
    emitedTo: DataTypes.STRING,
    nNf: DataTypes.STRING,
    CTE: DataTypes.STRING,
    value: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    cnpjId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    buyerId: DataTypes.INTEGER,
    providerId: DataTypes.INTEGER,
    orderStatusBuyer: DataTypes.STRING,
    orderStatusProvider: DataTypes.STRING,
    deliveryReceipt: DataTypes.STRING,
    cargoPackingList: DataTypes.STRING,
    deliveryCtrc: DataTypes.STRING,
  }, {
    tableName: 'orders',
  });

  Order.associate = (models) => {
    Order.hasOne(models.Cnpj, { as: 'cnpj', foreignKey: 'cnpjId' });
  };

  Order.associate = (models) => {
    Order.hasOne(models.User, { as: 'user', foreignKey: 'userId' });
  };

  Order.associate = (models) => {
    Order.hasOne(models.Buyer, { as: 'buyer', foreignKey: 'buyerId' });
  };

  Order.associate = (models) => {
    Order.hasOne(models.Provider, { as: 'provider', foreignKey: 'providerId' });
  };

  Order.associate = (models) => {
    Order.belongsTo(models.Offer, { as: 'offer', foreignKey: 'orderId' });
  };

  Order.associate = (models) => {
    Order.belongsTo(models.Orderportion, { as: 'order', foreignKey: 'orderId' });
  };

  return Order;
};

module.exports = ordersModel;