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

  return Cnpj;
};

module.exports = cnpjsModel;