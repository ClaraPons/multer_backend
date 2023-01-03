const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const User = sequelize.define("User", {
        lastname: {
            type: DataTypes.STRING,
        },
        firstname: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
        },
        profile_picture: {
            type: DataTypes.TEXT,
        },
    });

    return User;
};