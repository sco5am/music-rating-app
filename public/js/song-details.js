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

async function search() {
  const response = await fetch(
    `https://spotify23.p.rapidapi.com/search/?q=${fullSearch}&type=multi&offset=0&limit=10&numberOfTopResults=5`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd7c6b4bfefmsh543bab1a89406f9p15f96bjsn733aef5dbccc',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
      },
    }
  );
  const data = await response.json();
  console.log(data);
}

search();
