const router = require('express').Router();
const { Comment } = require('../../models');
const hasAuth = require('../../utils/auth');

// fetch all comments
router.get('/', (req, res) => {
  Comment.findAll({
      attributes: ["cmt_id", "cmt_text", "cmt_usr_id", "cmt_pst_id", "created_at"],
      include: [
          {
              model: User,
              as: "user",
              attributes: ["usr_name"],
          },
      ],
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      res.status(500).json(err);
    });
});

//fetch one comment
router.get("/:cmt_id", (req, res) => {
    Comment.findOne({
      where: {
        cmt_id: req.params.cmt_id,
      },
      attributes: ["cmt_id", "cmt_text", "cmt_usr_id", "cmt_pst_id", "created_at"],
      include: [
        {
          model: User,
          as: "user",
          attributes: ["usr_name"],
        },
      ],
    }) 
      .then((dbCommentData) => {
        if (!dbCommentData) {
          res.status(404).json({ message: "No Comment found with this id" });
          return;
        }
        res.json(dbCommentData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//create comment
router.post('/', hasAuth, (req, res) => {
  Comment.create({
    cmt_text: req.body.cmt_text,
    cmt_usr_id: req.session.usr_id,
    cmt_pst_id: req.body.cmt_pst_id
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      res.status(400).json(err);
    });
});

//update comment
router.post("/", hasAuth, (req, res) => {
    Comment.update(
        {
            cmt_title: req.body.pst_title,
            cmt_content: req.body.pst_content,
        },
        {
            where: {
                cmt_pst_id: req.params.cmt_pst_id,
            },
        }
    )
        .then((dbPostData) => {
            if (!dbPostData) {
                res.status(404).json({ message: "No post found with this id" });
                return;
            }
            res.json(dbPostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//delete comment
router.delete('/:cmt_id', hasAuth, (req, res) => {
  Comment.destroy({
    where: {
      cmt_id: req.params.cmt_id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;