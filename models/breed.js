export default (sequelize, DataTypes) => {
    const Breed = sequelize.define('breed', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: { type: DataTypes.TEXT },
    }, {
      timestamp: true,
      underscored: true
    });

    Breed.associate = (models) => {
        Breed.hasMany(models.dog);
    };

    return Breed;
  };
