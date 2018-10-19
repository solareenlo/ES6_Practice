function handlePosts() {
    var posts = [
        {id: 23, title: 'JSニュース'},
        {id: 52, title: 'リファクタ〜・シティ'}
        {id: 101, title: 'javaの良いところ'}
    ];

    for(var i=0; i<posts.length; i++){
        savePosts(posts[i]);
    }
}

function handlePosts() {
    var posts = [
        {id: 23, title: 'JSニュース'},
        {id: 52, title: 'リファクタ〜・シティ'}
        {id: 101, title: 'javaの良いところ'}
    ];

    posts.forEach(function(post) {
        savePosts(post);
    });
}
