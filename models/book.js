export default (sequelize, DataTypes) => {
    const Book = sequelize.define('book', {
      title: {
        type: DataTypes.STRING
      },
      author: {
        type: DataTypes.STRING
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    }, { timestamps: false }
  );

    Book.associate = function(models) {
      // associations can be defined here
    };

    return Book;
  };