import { Tool } from "./tool.js";

/** sum(f : functions, iter : list < 생략 가능) */
const sum = Tool.curry((f, iter) => Tool.go(
    iter,
    Tool.map(f),
    Tool.reduce((a, b) => a+b)
))

const total_quantity = sum(x => x.quantity)

const total_price = sum(x => x.quantity * x.price)

const main = () => {

    const products = [
        {name : '반팔티', price : 1000, quantity : 1},
        {name : '긴팔티', price : 1500, quantity : 2},
        {name : '반바지', price : 1900, quantity : 3},
        {name : '청바지', price : 2500, quantity : 4},
        {name : '정장', price : 10000, quantity : 5},
    ]

    console.log(total_price(products))
    console.log(total_quantity(products))
}

main()