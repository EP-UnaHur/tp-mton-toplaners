'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carrera extends Model {

    static associate(models) {
      carrera.hasMany(models.Materia,{
        as: "Materias",
        foreignKey: "id_carrera"
      })
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