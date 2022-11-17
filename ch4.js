// 제너레이터 -> 이터레이터를 만드는 함수!!

function *gen() {
    yield 1
    yield 2
    yield 3
    return 100
}


let iter = gen();

for(const i of iter) console.log(i)