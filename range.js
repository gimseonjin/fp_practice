const reduce = (f, total, iter) => {
    if(!iter){
        iter = total[Symbol.iterator]();
        total = iter.next().value;
    }

    for(const i of iter) total = f(total, i)
    return total
}

const range = l => {
    const result = []

    for(let i = 0; i < l; i++)
        result.push(i)

    return result
}

const add = (a,b) => a+b

const list = range(4)

const Lrange = function* (l) {
    for(let i = 0; i < l; i++)
        yield i
}

const Llist = Lrange(4)


/**
 * 
 * range vs Lrange의 차이
 * 
 * 실행 시점을 조절할 수 있다. 
 * 
 * 이는 매우 중요한데 Lazy Loading이라고 해서 실제 함수를 사용하지 않는데 함수를 사용할 경우를
 * 핸들링 할 수 있다.
 * 
 * 실제로 자바스크립트 외에도 python, java에서도 사용된다.
 * 
 */

const test = (name, time, f) =>{
    console.time(name)
    while(time--) f()
    console.timeEnd(name)
}

test("range", 10, () => reduce(add, range(10000000))) // range: 2.033s
test("Lrange", 10, () => reduce(add, Lrange(10000000))) // Lrange: 1.662s