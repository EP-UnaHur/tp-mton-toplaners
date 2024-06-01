'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profesor extends Model {
    static associate(models) {
      Profesor.belongsToMany(models.Curso,{
        through: 'Curso_Profesor',
        as:'cursos',
        foreignKey: 'id_profesor',
        otherKey: 'id_curso'
      })
    }
  }
  Profesor.init({
    nombre: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATEONLY,
    legajo: DataTypes.INTEGER,
    activo: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'Profesor',
    timestamps: false
  });
  return Profesor;
};