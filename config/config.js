require('dotenv').config();

const env = process.env.NODE_ENV || "development";
const config = {
	"serverPort": process.env.SERVER_PORT || 3737,
	"appEnv": env,
};

config[`${env}`] = {
	"username": process.env.DB_USERNAME || "root",
	"password": process.env.DB_PASS || null,
	"database": process.env.DB_NAME || "database_development",
	"host": process.env.DB_HOST || "127.0.0.1",
	"port": process.env.DB_PORT || "127.0.0.1",
	"dialect": process.env.DB_DIALCAT || "mysql",
};

module.exports = config;
