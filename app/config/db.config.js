module.exports = {
  HOST: process.env.PG_HOST || "localhost",
  USER: process.env.PG_USER || "admin",
  PASSWORD: process.env.PG_PASSWORD || "admin",
  DB: process.env.PG_DB || "ibm_challange",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};