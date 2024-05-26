'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carrera extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  carrera.init({
    nombre: DataTypes.STRING,
    grado: DataTypes.STRING,
    universidad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'carrera',
  });
  return carrera;
};