'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  profesor.init({
    nombre: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATEONLY,
    legajo: DataTypes.NUMBER,
    activo: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'profesor',
  });
  return profesor;
};