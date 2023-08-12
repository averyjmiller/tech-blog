const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#form-content').value.trim();
  const postID = document.querySelector('.selected-post').id;

  if(comment) {
    const response = await fetch('/api/blog/comment', {
      method: 'POST',
      body: JSON.stringify({ postID, comment }),
      headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create post.');
    }
  }
};

document.querySelector('.post-form').addEventListener('submit', commentFormHandler);