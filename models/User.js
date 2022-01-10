//import models
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

//create user model
class User extends Model {
    //set up bcrypt to check pw per user per instance
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//define what it means to be a user
User.init(
    {
        //set primary key as id
        usr_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // names hold power
        usr_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //allow association with the forces of evil
        usr_twitter: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        //allow association with github
        usr_github: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        //allow association with stack
        usr_stackof: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        //allow association with portfolio
        usr_portfolio: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        //add email for funsies
        usr_email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        //add password
        usr_pw: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
    {
        hooks: {
            // set up beforeCreate hook functionality
            async beforeCreate(newUserData) {
                newUserData.usr_pw = await bcrypt.hash(newUserData.usr_pw, 10);
                return newUserData;
            },
            // set up beforeUpdate hook functionality
            async beforeUpdate(updatedUserData) {
                updatedUserData.usr_pw = await bcrypt.hash(updatedUserData.usr_pw, 10);
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user",
    }
);

module.exports = User;