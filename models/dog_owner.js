export default (sequelize, DataTypes) => {
    const DogOwner = sequelize.define('dog_owner', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name:       { type: DataTypes.TEXT },
      age:        { type: DataTypes.INTEGER },
      address_id: { type: DataTypes.INTEGER }
    }, {
      timestamp: true,
      underscored: true
    });

//    DogOwner.associate = function(models) {
    // DogOwner.associate = (models) => {
    //     DogOwner.hasMany(models.Dog);
    // };

    return DogOwner;
  };
