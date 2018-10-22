function test1(a){
    if(a < 1) {
        return;
    } else {
        console.log(a);
        a = a - 1;
        return test1(a);
    };
}

test1(3);
