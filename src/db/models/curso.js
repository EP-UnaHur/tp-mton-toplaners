'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
     Curso.belongsToMany(models.Profesor, {
        through: 'Curso_Profesor',
        as:'profesores',
        foreignKey: 'id_curso',
        otherKey: 'id_profesor'
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
    timestamps: false
  });
  return Curso;
};