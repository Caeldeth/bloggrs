//import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//create the foreign keys

User.hasMany(Post, {
    foreignKey: 'pst_usr_id'
});

Post.belongsTo(User, {
    foreignKey: 'pst_usr_id'
});

Comment.belongsTo(User, {
    foreignKey: 'cmt_usr_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'cmt_pst_id'
});

User.hasMany(Comment, {
    foreignKey: 'cmt_usr_id'
});

Post.hasMany(Comment, {
    foreignKey: 'cmt_pst_id'
});

module.exports = {User, Post, Comment};
