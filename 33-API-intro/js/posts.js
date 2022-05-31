function loadPost() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => displayPosts(data))
}
loadPost();
const postContainer = document.getElementById('post-container');
function displayPosts(posts) {
  for (const post of posts) {
    const div = document.createElement('div');
    div.classList.add('post')
    div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `
    postContainer.appendChild(div);
  }
}




function addAPost(){
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'My new post',
      body: 'This is my posts',
      userId: 1
    }),
    headers: {
      'content-type' : 'application/json; charset=UTF-8',
    },
  })
  .then(res => res.json())
  .then(data => console.log(data))
}

function addAPost2(){
  fetch('https://jsonplaceholder.typicode.com/pusts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'My new post',
      body: 'This is my posts',
      userId: 1
    }),
    headers: {
      'content-type' : 'application/json; charset=UTF-8',
    },
  })
  .then(res => res.json())
  .then(data => console.log(data))
}
