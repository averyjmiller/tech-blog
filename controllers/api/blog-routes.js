const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/create', withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      author_id: req.session.userID,
      title: req.body.title,
      content: req.body.content,
    });

    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/comment', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      author_id: req.session.userID,
      post_id: req.body.postID,
      content: req.body.comment,
    });

    res.status(200).json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.update({
      title: req.body.title,
      content: req.body.content,
    },
    {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;