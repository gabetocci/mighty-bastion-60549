export default (sequelize, DataTypes) => {
    const Book = sequelize.define('book', {
    //   id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    //   },
      title: DataTypes.STRING,
      author: DataTypes.TEXT,
    },
    {
      freezeTableName: true,
    });

    return Book;
  };
