const {
	db: { username, password, database, host },
} = require("./index");

module.exports = {
	development: {
		username,
		password,
		database,
		host,
		dialect: "postgres",
		seederStorage: "sequelize",
	},
	production: {
		use_env_variable: "DATABASE_URL",
		dialect: "postgres",
		seederStorage: "sequelize",
		dialectOptions: {
			// << THIS OBJECT
			ssl: {
				// << WITH THIS NESTED OBJECT
				require: true, // <<vv AND THESE KEY:VALUE PAIRS
				rejectUnauthorized: false,
			},
		},
	},

	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
};
