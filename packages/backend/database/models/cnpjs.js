'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cnpjs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cnpjs.init({
    id: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'cnpjs',
  });
  return cnpjs;
};