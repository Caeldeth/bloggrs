const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const hasAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', hasAuth, (req, res) => {
    Post.findAll({
      where: {
        usr_id: req.session.usr_id
      },
      attributes: ['pst_id', 'pst_title', 'pst_content', 'created_at'],
      include: [
        {
          model: Comment,
          attributes: ['cmt_id', 'cmt_text', 'cmt_pst_id', 'cmt_usr_id', 'created_at'],
          include: {
            model: User,
            attributes: ['usr_name']
          }
        },
        {
          model: User,
          attributes: ['usr_name']
        }
      ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.get('/edit/:pst_id', hasAuth, (req, res) => {
    Post.findByPk(req.params.pst_id, {
      attributes: ['pst_id', 'pst_title', 'pst_content', 'created_at'],
      include: [
        {
          model: Comment,
          attributes: ['cmt_id', 'cmt_text', 'cmt_pst_id', 'cmt_usr_id', 'created_at'],
          include: {
            model: User,
            attributes: ['usr_name']
          }
        },
        {
          model: User,
          attributes: ['usr_name']
        }
      ]
    })
      .then(dbPostData => {
        if (dbPostData) {
          const post = dbPostData.get({ plain: true });
          
          res.render('edit-post', {
            post,
            loggedIn: true
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  module.exports = router;