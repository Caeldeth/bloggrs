//import models
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create post Model
class Post extends Model {}

//create fields/columns for post
Post.init(
    {
        pst_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        pst_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pst_content: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        pst_usr_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'usr_id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;