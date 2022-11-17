// 제너레이터 -> 이터레이터를 만드는 함수!!

function *gen() {
    yield 1
    yield 2
    yield 3
    return 100
}


let iter = gen();

for(const i of iter) console.log(i)


function *infinity(i = 0){
    while(true) yield i++
}


function *limit(l, iter){
    for(const i of iter){
        yield i;
        if (i == l) return;
    }

}


function *odds(num) {
    for(const i of limit(num, infinity(1))){
        if (i % 2) yield i;
    }
}

for(const o of odds(99)) console.log(o)