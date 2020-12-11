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
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      location_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      approved: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    }
    ,{timestamps: false}
    );
  
    return character;
  };