module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      discord_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rank:{
      type: Sequelize.STRING,
      allowNull: false
      }

      
    },{timestamps: false});
  
    return User;
  };