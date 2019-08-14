'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var Book = sequelize.define('book', {
    //   id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    //   },
    title: DataTypes.STRING,
    author: DataTypes.TEXT
  }, {
    freezeTableName: true
  });

  return Book;
};
//# sourceMappingURL=book.js.map