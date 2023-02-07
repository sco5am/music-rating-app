const sequelize = require('../config/connection');
const { User, Song } = require('../models');

const userData = require('./userData.json');
const songData = require('./songData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const song of songData) {
    await Post.create({
      ...song,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
