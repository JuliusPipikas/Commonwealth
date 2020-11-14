module.exports = (sequelize, Sequelize) => {
    const player = sequelize.define("players", {
      player_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      player_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      player_rank: {
        type: Sequelize.STRING,
        allowNull: false
      },
      discord_id: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }
    ,{timestamps: false}
    );
  
    return player;
  };