const hasAuth = (req, res, next) => {
    if (!req.session.usr_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = hasAuth;