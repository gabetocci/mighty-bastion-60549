export default (sequelize, DataTypes) => {
    const Dog = sequelize.define('dog', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name:       { type: DataTypes.TEXT },
      age:        { type: DataTypes.INTEGER },
      owner_id:   { type: DataTypes.INTEGER},
      breed_id:   { type: DataTypes.INTEGER },
      address_id: { type: DataTypes.INTEGER }
    }, {
      timestamp: true,
      underscored: true
    });

    Dog.associate = function(models) {
      Dog.hasOne(Breed);
    };
    return Dog;
  };

  // class Dog extends Model {}
  // User.init({
  //     id: {
  //       type: DataTypes.INTEGER,
  //       primaryKey: true,
  //       autoIncrement: true
  //     },
  //     name:       { type: DataTypes.TEXT },
  //     age:        { type: DataTypes.INTEGER },
  //     owner_id:   { type: DataTypes.INTEGER},
  //     breed_id:   { type: DataTypes.INTEGER },
  //     address_id: { type: DataTypes.INTEGER }
  // }, {
  //   sequelize,
  //   modelName: 'dog'
  // });

  // Dog.hasOne(Breed);
