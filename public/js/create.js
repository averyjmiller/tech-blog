const newPostHandler = async (event) => {
  event.preventDefault();

  document.querySelector('#newpost').classList.add('hidden');
  document.querySelector('.posts').classList.add('hidden');
  document.querySelector('.new-post').classList.remove('hidden');
}

const createFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#form-title').value.trim();
  const content = document.querySelector('#form-content').value.trim();

  if(title && content) {
    console.log(title, content);
    const response = await fetch('/api/blog/create', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post.');
    }
  }
};

document.querySelector('#newpost').addEventListener('click', newPostHandler);

document.querySelector('.post-form').addEventListener('submit', createFormHandler);