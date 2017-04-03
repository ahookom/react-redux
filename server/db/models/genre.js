'use strict';

const db = require('../db');
const DataTypes = db.Sequelize;


module.exports = db.define('genre', {

  name: {
    type: DataTypes.STRING(), // eslint-disable-line new-cap
    allowNull: false,
  }

}, {});
