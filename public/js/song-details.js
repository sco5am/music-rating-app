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

const fullSearch = `${songTitle}%20${artist}`;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd7c6b4bfefmsh543bab1a89406f9p15f96bjsn733aef5dbccc',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
  },
};
