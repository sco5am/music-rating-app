const newRatingHandler = async (event) => {
    event.preventDefault();
  //gets valude of song name/rating
    const name = document.querySelector('#song-name').value.trim();
    const rating = document.querySelector('#song-rating').value.trim();
  
    if (name && rating) {
      const response = await fetch(`/api/song`, {
        method: 'POST',
        body: JSON.stringify({ name, rating }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create song rating');
      }
    }
  };
  
//deletes song rating 
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/song/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete song rating');
      }
    }
  };
  
  document
    .querySelector('.new-song-rating')
    .addEventListener('submit', newRatingHandler);
  
  document
    .querySelector('.song-list')
    .addEventListener('click', delButtonHandler);
  