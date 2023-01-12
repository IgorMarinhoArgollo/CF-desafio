/* eslint-disable max-lines-per-function */
const offersModel = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    tax: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    tariff: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    adValorem: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    float: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    iof: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    expiresIn: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    paymentStatusSponsor: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER,
    },
    paymentStatusProvider: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
    },
    sponsorId: {
      defaultValue: null,
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'offers',
  });

  Offer.associate = (models) => {
    Offer.belongsTo(models.Sponsor, { foreignKey: 'sponsorId' });
    Offer.belongsTo(models.Order, { foreignKey: 'orderId' });
  };
  
  return Offer;
};

module.exports = offersModel;