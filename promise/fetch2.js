// Chromeの検証のConsoleでみてね
// これはthenが実行される. なぜならネットワークに繋がったから.
url = "https://jsonplaceholder.typicode.com/posts123/";

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('問題発生', error));

// これはcatchが実行される. なぜならネットワークに繋がらなかったから.
url = "https://jsonplaceholder.typicode123.com/posts/";

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('問題発生', error));
