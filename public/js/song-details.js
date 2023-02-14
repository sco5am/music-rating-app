const photoBox = document.querySelector('#photo-box');
const songTitle = document
  .querySelector('.song-title')
  .innerHTML.split(' ')
  .join('%20')
  .trim();
const artist = document
  .querySelector('.artist')
  .innerHTML.split(' ')
  .join('%20')
  .trim();
