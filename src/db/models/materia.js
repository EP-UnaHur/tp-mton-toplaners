'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    static associate(models) {
      /*
      Materia.hasMany(models.Curso, {
        as: 'cursosArray',
        foreignKey: 'id_curso'
      })

      Materia.belongsTo(models.Carrera, {
        as: 'Carrera',
        foreignKey: 'id_carrera'
      })
      */
    }
  }
  Materia.init({
    nombre: DataTypes.STRING,
    cuatrimestral: DataTypes.NUMBER,
    anio: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Materia',
  });
  return Materia;
};