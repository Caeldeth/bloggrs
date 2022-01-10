//import models
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create post Model
class Post extends Model {}

//create fields/columns for post
Post.init(
    {
        //define post unique id
        pst_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // let posts have titles
        pst_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // let posts have content
        pst_content: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        // connect posts to author's user id
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