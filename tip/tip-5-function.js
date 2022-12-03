
const products = [
    {name : '반팔티', price : 1000},
    {name : '긴팔티', price : 1500},
    {name : '반바지', price : 1900},
    {name : '청바지', price : 2500},
    {name : '정장', price : 10000},
]

const curry = f => (a, ...args) => args.length ? f(a, ...args) : (...args) => f(a, ...args)

const map = curry((f, iter) => {
    const result = []

    for(const i of iter){
        result.push(f(i))
    }

    return result
})

const filter = curry((f, iter) => {
    const result = []
    for(const i of iter){
        if(f(i))
            result.push(i)
    }
    return result
})

const reduce = curry((f, total, iter) => {
    if(!iter){
        iter = total[Symbol.iterator]();
        total = iter.next().value;
    }

    for(const i of iter) total = f(total, i)
    return total
})

const go = (...funcs) => reduce((acc, f) => f(acc), funcs)

const pipe = (f, ...funcs) => (...acc) => go(f(...acc), ...funcs)




const total_price = pipe(
    map(x => x.price),
    reduce((a,b) => a+b)
)

go(
    products,
    total_price,
    console.log
)