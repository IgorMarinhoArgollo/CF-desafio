/* eslint-disable max-lines-per-function */
const cnpjsModel = (sequelize, DataTypes) => {
  const Cnpj = sequelize.define('Cnpj', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    cnpj: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    companyType: {
      allowNull: false,
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
  }, {
    tableName: 'cnpjs',
  });

  Cnpj.associate = (models) => {
    Cnpj.hasOne(models.Buyer, { as: 'buyer', foreignKey: 'cnpjId' });
  };

  Cnpj.associate = (models) => {
    Cnpj.hasOne(models.Sponsor, { as: 'sponsor', foreignKey: 'cnpjId' });
  };

  Cnpj.associate = (models) => {
    Cnpj.hasOne(models.Provider, { as: 'provider', foreignKey: 'cnpjId' });
  };

  Cnpj.associate = (models) => {
    Cnpj.hasOne(models.Order, { as: 'order', foreignKey: 'cnpjId' });
  };

  return Cnpj;
};

module.exports = cnpjsModel;