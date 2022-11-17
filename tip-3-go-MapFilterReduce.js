const products = [
    {name : '반팔티', price : 1000},
    {name : '긴팔티', price : 1500},
    {name : '반바지', price : 1900},
    {name : '청바지', price : 2500},
    {name : '정장', price : 10000},
]

const map = (f, iter) => {
    const result = []

    for(const i of iter){
        result.push(f(i))
    }

    return result
}

const filter = (f, iter) => {
    const result = []
    for(const i of iter){
        if(f(i))
            result.push(i)
    }
    return result
}

const reduce = (f, total, iter) => {
    if(!iter){
        iter = total[Symbol.iterator]();
        total = iter.next().value;
    }

    for(const i of iter) total = f(total, i)
    return total
}

const go = (...funcs) => reduce((acc, f) => f(acc), funcs)

// products에 바지인 것을 골라서 price를 뽑아내서 총합을 구하는 케이스

go(
    products,
    products => filter(x => x.name.includes("바지"), products),
    products => map(x => x.price, products),
    products => reduce((a,b) => a+b, products),
    console.log
)

