const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment } = require("../../models");
const hasAuth = require("../../utils/auth");

// fetch all posts
router.get("/", (req, res) => {
    Post.findAll({
        attributes: ["pst_id", "pst_title", "pst_content", "created_at"],
        include: [
            {
                model: Comment,
                attributes: ["cmt_id", "cmt_text", "cmt_pst_id", "cmt_usr_id", "created_at"],
                include: {
                    model: User,
                    attributes: ["usr_name"],
                },
            },
            {
                model: User,
                attributes: ["usr_name"],
            },
        ],
    })
        .then((dbPostData) => res.json(dbPostData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// fetch one post
router.get("/:pst_id", (req, res) => {
    Post.findOne({
        where: {
            pst_id: req.params.pst_id,
        },
        attributes: ["pst_id", "pst_content", "pst_title", "created_at"],
        include: [
            {
                model: Comment,
                attributes: ["cmt_id", "cmt_text", "cmt_pst_id", "cmt_usr_id", "created_at"],
                include: {
                    model: User,
                    attributes: ["usr_name"],
                },
            },
            {
                model: User,
                attributes: ["usr_name"],
            },
        ],
    })
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

// create post
router.post("/", hasAuth, (req, res) => {
    Post.create({
        pst_title: req.body.pst_title,
        pst_content: req.body.pst_content,
        pst_usr_id: req.session.pst_usr_id,
    })
        .then((dbPostData) => res.json(dbPostData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// update post
router.put("/:pst_id", hasAuth, (req, res) => {
    Post.update(
        {
            pst_title: req.body.pst_title,
            pst_content: req.body.pst_content,
        },
        {
            where: {
                pst_id: req.params.pst_id,
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

// delete post
router.delete("/:pst_id", hasAuth, (req, res) => {
    Post.destroy({
        where: {
            pst_id: req.params.pst_id,
        },
    })
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

module.exports = router;
