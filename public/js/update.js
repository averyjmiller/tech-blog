const updateFormHandler = async (event) => {
  event.preventDefault();

  if(event.target.id === "cancel-btn") {
    document.location.replace('/dashboard');
    return;
  }

  if(event.target.id === "update-btn") {
    const postID = document.querySelector('.update-post').id;
    const title = document.querySelector('#form-title').value.trim();
    const content = document.querySelector('#form-content').value.trim();
  
    if(postID && title && content) {
      const response = await fetch(`/api/blog/${postID}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if(response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post.');
      }
    }  
  }
};

document.querySelector('.post-form').addEventListener('click', updateFormHandler);