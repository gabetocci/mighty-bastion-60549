export default (sequelize, DataTypes) => {
    const Address = sequelize.define('address', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      street1: { type: DataTypes.TEXT },
      street2: { type: DataTypes.TEXT },
      street3: { type: DataTypes.TEXT },
      city:    { type: DataTypes.TEXT },
      state:   { type: DataTypes.TEXT },
      zip:     { type: DataTypes.TEXT },
    }, {
      timestamp: true,
      underscored: true
    });



    Address.associate = function(models) {

    };

    return Address;
  };
