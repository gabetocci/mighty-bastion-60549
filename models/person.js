export default (sequelize, DataTypes) => {
    const Person = sequelize.define('person', {
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

    Person.associate = function(models) {
        Person.hasMany(models.dog);
    };

    return Person;
  };
