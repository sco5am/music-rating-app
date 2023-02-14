const router = require('express').Router();
const { Song, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all songs and JOIN with user data ordering with the score of the song
    const songData = await Song.findAll({
        order: [['score', 'DESC']]
   });
    // Serialize data so the template can read it
    const songs = songData.map((song) => song.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      songs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/song/:id', async (req, res) => {
  try {
    const songData = await Song.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const song = songData.get({ plain: true });

    res.render('song', {
      ...song,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Song }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});


router.get('/edit/:id', async (req, res) => {
  try {
    const songData = await Song.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const song = songData.get({ plain: true });

    res.render('edit-song', {
      ...song,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
