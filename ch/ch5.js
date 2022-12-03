const products = [
    {name : '반팔티', price : 1000},
    {name : '긴팔티', price : 1500},
    {name : '반바지', price : 1900},
    {name : '청바지', price : 2500},
    {name : '정장', price : 10000},
]

// map method
const map = (f, iter) => {
    const result = []

    for(const i of iter){
        result.push(f(i))
    }

    return result
}

const result = map(p=>p.name, products)

console.log(result)


const m = new Map();
m.set("1", 1)
m.set("2", 2)
m.set("3", 3)
m.set("4", 4)
m.set("5", 5)


const result2 = map(([k, v]) => [k, v*v], m)

console.log(result2)