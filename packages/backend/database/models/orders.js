/* eslint-disable max-lines-per-function */
const ordersModel = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    orderNfId: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    orderNumber: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    orderPath: {
      defaultValue: null,
      unique: true,
      type: DataTypes.STRING,
    },
    orderFileName: {
      defaultValue: null,
      unique: true,
      type: DataTypes.STRING,
    },
    orderOriginalName: {
      defaultValue: null,
      unique: true,
      type: DataTypes.STRING,
    },
    emissionDate: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    pdfFile: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    emitedTo: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    nNf: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    CTE: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    value: {
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
    userId: {
      defaultValue: null,
      type: DataTypes.INTEGER,
    },
    buyerId: {
      defaultValue: null,
      type: DataTypes.INTEGER,
    },
    providerId: {
      defaultValue: null,
      type: DataTypes.INTEGER,
    },
    orderStatusBuyer: {
      defaultValue: 0,
      type: DataTypes.STRING,
    },
    orderStatusProvider: {
      defaultValue: 0,
      type: DataTypes.STRING,
    },
    deliveryReceipt: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    cargoPackingList: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
    deliveryCtrc: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'orders',
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
    Order.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Order.belongsTo(models.Buyer, { foreignKey: 'buyerId', as: 'buyer' });
    Order.belongsTo(models.Provider, { foreignKey: 'providerId', as: 'provider' });
    Order.hasMany(models.OrderPortion, { foreignKey: 'orderId', as: 'orderPortion' });
    Order.hasMany(models.Offer, { foreignKey: 'orderId', as: 'offer' });
  };

  return Order;
};

module.exports = ordersModel;