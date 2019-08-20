export default (sequelize, DataTypes) => {
    const Incident = sequelize.define('incident', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title:              { type: DataTypes.TEXT },
      description:        { type: DataTypes.TEXT },
      incident_timestamp: { type: DataTypes.DATE },
      dog_id:             { type: DataTypes.INTEGER },
      address_id:         { type: DataTypes.INTEGER }
    }, {
      timestamp: true,
      underscored: true
    });

    Incident.associate = function(models) {
      // associations can be defined here
    };

    return Incident;
  };
