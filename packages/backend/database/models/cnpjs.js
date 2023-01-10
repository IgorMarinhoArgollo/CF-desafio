/* eslint-disable max-lines-per-function */
const cnpjsModel = (sequelize, DataTypes) => {
  const Cnpj = sequelize.define('Cnpj', {
    id: DataTypes.INTEGER,
    cnpj: DataTypes.STRING,
    companyType: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: 'cnpjs',
  });

  Cnpj.associate = (models) => {
    Cnpj.belongsTo(models.Buyer, { as: 'buyer', foreignKey: 'cnpjId' });
  };

  Cnpj.associate = (models) => {
    Cnpj.belongsTo(models.Sponsor, { as: 'sponsor', foreignKey: 'cnpjId' });
  };

  Cnpj.associate = (models) => {
    Cnpj.belongsTo(models.Provider, { as: 'provider', foreignKey: 'cnpjId' });
  };

  Cnpj.associate = (models) => {
    Cnpj.belongsTo(models.Order, { as: 'order', foreignKey: 'cnpjId' });
  };

  return Cnpj;
};

module.exports = cnpjsModel;