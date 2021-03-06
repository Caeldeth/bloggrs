const { User, Post } = require('../models');

const userSeeds = [
// user data in objects
{
    // user 1
    usr_name: 'estark',
    usr_email: 'eddard.stark@winterfell.wes',
    usr_pw: 'pw123'
  },
  {
    // user 2
    usr_name: 'rbaratheon',
    usr_email: 'robert.baratheon@kingslanding.wes',
    usr_pw: 'pw123'
  },
  {
    //user 3
    usr_name: 'jlannister',
    usr_email: 'jamie.lannister@casterlyrock.wes',
    usr_pw: 'pw123'
  },
  {
    //user 4
    usr_name: 'cstark',
    usr_email: 'catelyn.stark@winterfell.wes',
    usr_pw: 'pw123'
  },
  {
    //user 5
    usr_name: 'clannister',
    usr_email: 'cersei.lannister@winterfell.wes',
    usr_pw: 'pw123'
  },
  {
    //user 6
    usr_name: 'dtargaryen',
    usr_email: 'daenerys.targaryen@mereen.wes',
    usr_pw: 'pw123'
  },
  {
    //user 7
    usr_name: 'jmormont',
    usr_email: 'jorah.mormont@meree.wes',
    usr_pw: 'pw123'
  },
  {
    //user 8
    usr_name: 'onetrueking',
    usr_email: 'viserys.targaryen@kingslanding.wes',
    usr_pw: 'pw123'
  },
  {
    //user 9
    usr_name: 'jsnow',
    usr_email: 'jon.snow@castleblack.wes',
    usr_pw: 'pw123'
  },
  {
    //user 10
    usr_name: 'rstark',
    usr_email: 'rob.stark@winterfell.wes',
    usr_pw: 'pw123'
  }
];

// send to seed user data
const seedUsers = () => User.bulkCreate(userSeeds, {individualHooks: true});

// export user seeds
module.exports = seedUsers;