const nums = [1,2,3,4,5]
const products = [
    {name : '반팔티', price : 1000},
    {name : '긴팔티', price : 1500},
    {name : '반바지', price : 1900},
    {name : '청바지', price : 2500},
    {name : '정장', price : 10000},
]

let total = 0

const reduce = (f, total, iter) => {
    if(!iter){
        iter = total[Symbol.iterator]();
        total = iter.next().value;
    }

    for(const i of iter) total = f(total, i)
    return total
}

const result = reduce((a, b) => a+b, nums)
const productsResult = reduce((a,b) => a + b.price, 0, products)

console.log(productsResult)