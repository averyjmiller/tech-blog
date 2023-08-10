const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userID, {
      include: [
        {
          model: Post,
        },
      ],
    });

    const user = userData.get({ plain: true });
    res.render('dashboard', { user });
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;