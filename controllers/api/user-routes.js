const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

//fetch all users
router.get("/", (req, res) => {
    User.findAll({
        attributes: ["usr_id", "usr_name", "usr_twitter", "usr_github", "usr_stackof", "usr_portfolio", "usr_email"],
        include: [
            {
                model: Post,
                as: "posts",
                attributes: ["pst_id", "pst_title", "pst_content"],
            },
            {
                model: Comment,
                as: "comments",
                attributes: ["cmt_id", "cmt_text"],
            },
        ],
    })
        .then((dbUserData) => {
            res.json(dbUserData);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

//fetch one user
router.get("/:usr_id", (req, res) => {
    User.findOne({
        where: {
            id: req.params.usr_id,
        },
        attributes: ["usr_id", "usr_name", "usr_twitter", "usr_github", "usr_stackof", "usr_portfolio", "usr_email"],
        include: [
            {
                model: Post,
                as: "posts",
                attributes: ["pst_id", "pst_title", "pst_content"],
            },
            {
                model: Comment,
                as: "comments",
                attributes: ["cmt_id", "cmt_text"],
            },
        ],
    })
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: "No user found with that id" });
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

//create user
router.post("/", (req, res) => {
    User.create({
        //expects username, email, password
        username: req.body.usr_name,
        email: req.body.usr_email,
        password: req.body.usr_password,
    })
        .then((dbUserData) => {
            //save the data into a session
            req.session.save(() => {
                // we run the save function
                req.session.usr_id = dbUserData.usr_id; //and give it the data we want to save
                req.session.usr_name = dbUserData.usr_name;
                req.session.loggedIn = true;
                res.json(dbUserData); //Run this in callback so we make sure the session is updated before we respond
            });
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

//log in the user
router.post("/login", (req, res) => {
    //find the user in question
    User.findOne({
        where: {
            usr_email: req.body.usr_email,
        },
    })
        .then((dbUserData) => {
            //check if there was a user present
            if (!dbUserData) {
                res.status(400).json({ message: "User not found" });
                return;
            }
            const validPassword = dbUserData.checkPassword(req.body.usr_password);

            //check if password is correct
            if (!validPassword) {
                res.status(400).json({ message: "Incorrect Password!" });
                return;
            }

            //save things into session
            req.session.save(() => {
                //declare session variables
                req.session.usr_id = dbUserData.usr_id;
                req.session.usr_name = dbUserData.usr_name;
                req.session.loggedIn = true;
                //send response
                res.json({ user: dbUserData, message: "You are now logged in!" });
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//update user
router.put("/:usr_id", (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            usr_id: req.params.usr_id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

//destroy user
router.delete("/:usr_id", (req, res) => {
    User.destroy({
        where: {
            usr_id: req.params.usr_id,
        },
    })
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: "No User found with this id" });
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Log out the user
router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            // end the session
            res.status(204).end();
        });
    } else {
        res.status(404).end(); // if there was no session
    }
});

module.exports = router;
