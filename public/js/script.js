fetch('/api/posts')
    .then(response => response.json())
    .then(posts => {
        console.log(posts);  // Zkontroluj, co přijímáš
        const postsList = document.getElementById('posts');
        posts.forEach(post => {
            const li = document.createElement('li');
            li.textContent = `${post.title} - ${post.content}`;
            postsList.appendChild(li);
        });
    })
    .catch(error => console.error('Error fetching posts:', error));
