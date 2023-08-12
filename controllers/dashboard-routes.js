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

    if(!userData) {
      res.render('login');
      return;
    }

    const user = userData.get({ plain: true });
    res.render('dashboard', { 
      user,
      loggedIn: req.session.loggedIn, 
    });
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if(!postData) {
      res.status(404).json({ message: 'Could not find post with that id!' });
      return;
    }

    const updatePost = postData.get({ plain: true });

    console.log(updatePost);

    res.render('dashboard', {
      updatePost,
      update: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;