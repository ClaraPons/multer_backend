const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("upload_ex", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
});

const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to db");
    } catch (e) {
        console.log(e);
    }
};

connectDb();

const User = require("./user")(sequelize);

sequelize.sync({ alter: true });

const db = {
    sequelize,
    User,
};

module.exports = db;