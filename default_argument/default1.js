function makeAjaxRequest(url, method = 'GET') {
    // 下の3行が省略できるようになった.上のmethod = 'GET'を書くことで.
    // if(!method) {
    //     method = 'GET';
    // }
// ajaxリクエストをするロジックがここにあると想定する
return method;
}

console.log(makeAjaxRequest('google.com'));
console.log(makeAjaxRequest('google.com', null));
console.log(makeAjaxRequest('google.com', undefined));
console.log(makeAjaxRequest('google.com', 'POST'));
