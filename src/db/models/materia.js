'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    static associate(models) {
      
      Materia.hasMany(models.Curso, {
        as: 'cursos',
        foreignKey: 'id_materia'
      })
      
      Materia.belongsTo(models.Carrera, {
        as: 'carrera',
        foreignKey: 'id_carrera'
      })
      
    }
  }
  Materia.init({
    nombre: DataTypes.STRING,
    cuatrimestral: DataTypes.TINYINT,
    anio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Materia',
    timestamps: false
  });
  return Materia;
};