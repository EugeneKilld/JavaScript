$.getPosts = (modal) => {
    fetch(
        'https://jsonplaceholder.typicode.com/posts/',
        { method: 'GET' }
      )
        .then( response => response.json() )
        .then( json => {
          json.forEach(element => {
            const post = document.createElement('div')
            post.insertAdjacentHTML('afterbegin', `
              <div class="recipes">
                <div class="recipes-posts">
                  <div class="recipes-post-title">
                    ${element.title}
                  </div>
                  <div class="recipes-post-body">
                    ${element.body}
                  </div>
                </div>
              </div>
            `)
            modal.addChild(post)
          });
        } )
        .catch( error => console.error('error:', error) );
}