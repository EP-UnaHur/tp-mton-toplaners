'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
     Curso.hasMany(models.Curso_Profesor, {
        as:'registros',
        foreignKey:'id_curso_profesor'
      })

      Curso.belongsTo(models.Materia, {
        as:'materia',
        foreignKey:'id_materia'
      })
    }
  }
  Curso.init({
    comision: DataTypes.STRING,
    turno: DataTypes.STRING,
    fechaInicio: DataTypes.DATE,
    fechaFin: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};