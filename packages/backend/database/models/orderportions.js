/* eslint-disable max-lines-per-function */
const orderportionsModel = (sequelize, DataTypes) => {
  const Orderportion = sequelize.define('OrderPortion', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nDup: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    dVenc: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    vDup: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    availableToMarket: {
      allowNull: false,
      type: DataTypes.TINYINT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    orderId: {
      defaultValue: null,
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'orderportions',
  });

  Orderportion.associate = (models) => {
    Orderportion.belongsTo(models.Order, { as: 'order', foreignKey: 'orderId' });
  };

  return Orderportion;
};

module.exports = orderportionsModel;