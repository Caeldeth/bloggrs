const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// fetch all posts for homepage
router.get('/', (req, res) => {
  Post.findAll({
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

      res.render('home', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get('/post/:pst_id', (req, res) => {
  Post.findOne({
    where: {
      pst_id: req.params.pst_id
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
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});


module.exports = router;