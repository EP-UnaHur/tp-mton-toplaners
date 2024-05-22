'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso_Profesor extends Model {
    static associate(models) {

      Curso_Profesor.belongsTo(models.Curso,{
        as:'curso',
        foreignKey:'id_curso'
      })

   /*   Curso_Profesor.belongsTo(models.Profesor,{
        as:'profesor',
        foreignKey:'id_profesor'
      })*/

    }
  }
  Curso_Profesor.init({
  }, {
    sequelize,
    modelName: 'Curso_Profesor',
  });
  return Curso_Profesor;
};