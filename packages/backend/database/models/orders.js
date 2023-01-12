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
    Order.belongsTo(models.Cnpj, { as: 'cnpj', foreignKey: 'cnpjId' });
  };

  Order.associate = (models) => {
    Order.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };

  Order.associate = (models) => {
    Order.belongsTo(models.Buyer, { as: 'buyer', foreignKey: 'buyerId' });
  };

  Order.associate = (models) => {
    Order.belongsTo(models.Provider, { as: 'provider', foreignKey: 'providerId' });
  };

  Order.associate = (models) => {
    Order.hasOne(models.OrderPortion, { as: 'orderportions', foreignKey: 'orderId' });
  };

  return Order;
};

module.exports = ordersModel;