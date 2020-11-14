module.exports = (sequelize, Sequelize) => {
    const character = sequelize.define("characters", {
      character_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      character_class: {
        type: Sequelize.STRING,
        allowNull: false
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stat_array: {
        type: Sequelize.STRING,
        allowNull: false
      },
      character_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      player_id: {
        type: Sequelize.INTEGER,
      },
      location_id: {
        type: Sequelize.INTEGER,
      }
    }
    ,{timestamps: false}
    );
  
    return character;
  };