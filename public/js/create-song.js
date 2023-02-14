const newSongRating = async (event) => {
    event.preventDefault();
  //gets valude of song name/rating
    const song_name = document.querySelector('#song-name').value.trim();
    const artist = document.querySelector('#artist').value.trim();
    const description = document.querySelector('#song-desc').value.trim();
    const score = $('#rate2').data('rateValue')
  
    if (song_name && artist && description && score) {
      const response = await fetch(`/api/song`, {
        method: 'POST',
        body: JSON.stringify({ song_name, artist, description, score}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  // create
  document
  .querySelector('.new-song-rating')
  .addEventListener('submit', newSongRating);