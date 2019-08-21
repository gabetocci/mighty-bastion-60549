export default (sequelize, DataTypes) => {
    const Dog = sequelize.define('dog', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name:       { type: DataTypes.TEXT },
      age:        { type: DataTypes.INTEGER },
      person_id:  { type: DataTypes.INTEGER},
      breed_id:   { type: DataTypes.INTEGER },
      address_id: { type: DataTypes.INTEGER }
    }, {
      timestamp: true,
      underscored: true
    });

    Dog.associate = function(models) {
      Dog.belongsTo(models.breed);
      Dog.belongsTo(models.person);
//      Dog.belongsTo(models.address);
    };
    return Dog;
  };
