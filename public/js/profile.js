
// deletes song rating 
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
  
  const updateSong = async (event) => {
    event.preventDefault();
     //console.log(event.target);
    const id = event.target.getAttribute('data-update-id');

    console.log(id);
    const review = document.querySelector('#updated-review-content').value.trim();
    const score = $("#rate2").data("rateValue");


    if (score && review) {
      //localhost:3001/api/posts/:id
      const response = await fetch(`/api/song/${id}`, {
        method: 'PUT',
        body: JSON.stringify({score, review }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  console.log(response)
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to update post');
      }
    }
  };

// delete
  document
  .querySelector('.song-list')
  .addEventListener('click', delButtonHandler);
// update
  document
  .querySelector('#updateBtn')
  .addEventListener('click', updateSong);