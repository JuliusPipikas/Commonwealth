module.exports = (sequelize, Sequelize) => {
    const location = sequelize.define("locations", {
      location_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      location_name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }
    ,{timestamps: false}
    );
  
    return location;
  };