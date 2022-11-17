const products = [
    {name : '반팔티', price : 1000},
    {name : '긴팔티', price : 1500},
    {name : '반바지', price : 1900},
    {name : '청바지', price : 2500},
    {name : '정장', price : 10000},
]

//Filter
const filter = (f, iter) => {
    const result = []
    for(const i of iter){
        if(f(i))
            result.push(i)
    }
    return result
}

const result = filter(x => x.price > 2000, products)

console.log(result)