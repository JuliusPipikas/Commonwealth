module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "admin",
    DB: "Commonwealth",
    dialect: "mysql",
    pool: { // DAR NEZINAU KA DARO
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };