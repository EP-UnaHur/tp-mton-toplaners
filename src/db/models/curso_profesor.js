'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso_Profesor extends Model {
    static associate(models) {
    }
  }
  Curso_Profesor.init({
  }, {
    sequelize,
    modelName: 'Curso_Profesor',
    timestamps: false
  });
  return Curso_Profesor;
};