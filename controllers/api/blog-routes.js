const router = require('express').Router();
const { User, Post } = require('../../models');

router.post('/create', async (req, res) => {
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

router.put('/:id', async (req, res) => {
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