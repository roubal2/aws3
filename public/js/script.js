fetch('/posts')
    .then(response => response.json())
    .then(posts => {
        const postsContainer = document.getElementById('posts');
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
            postsContainer.appendChild(postElement);
        });
    })
    .catch(error => console.error('Error fetching posts:', error));
