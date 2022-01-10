const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const sequelize = require('../config/connection');

const seedAll = async() => {
    try {
        await sequelize.sync({ force: true });
        await seedUsers();
        await seedPosts();
        await seedComments();
    } catch (err) {
        // this will show the error
        console.log('There was an error!', err);
    } 
        process.exit(0);
};

seedAll();