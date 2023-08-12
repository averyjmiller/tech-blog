const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,

        },
      ],
    });
    const posts = postData.map((post) => 
      post.get({ plain: true })
    );

    res.render('homepage', { 
      posts,
      loggedIn: req.session.loggedIn, 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if(!postData) {
      res.status(404).json({ message: 'Could not find post with that id!' });
      return;
    }

    const post = postData.get({ plain: true });

    res.render('post', {
      post,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if(req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if(req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;