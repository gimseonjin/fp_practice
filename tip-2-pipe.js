const reduce = (f, total, iter) => {
    if(!iter){
        iter = total[Symbol.iterator]();
        total = iter.next().value;
    }

    for(const i of iter) total = f(total, i)
    return total
}

const go = (...funcs) => reduce((acc, f) => f(acc), funcs)

const pipe = (f, ...funcs) => (...acc) => go(f(...acc), ...funcs)

const result = pipe(
    (a,b) => a+b,
    a => a * 10
)

const r = result(10, 11)

console.log(r)