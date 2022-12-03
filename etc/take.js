const take = (l, iter) => {
    const result = []
    for (const i of iter){
        result.push(i)
        if (result.length == l) 
            return result
    }
    return result
}

const range = l => {
    const result = []

    for(let i = 0; i < l; i++)
        result.push(i)

    return result
}

const Lrange = function* (l) {
    for(let i = 0; i < l; i++)
        yield i
}

const test = (name, time, f) =>{
    console.time(name)
    while(time--) f()
    console.timeEnd(name)
}

test("range", 10, () => take(5, range(10000000))) // range: 1.193s
test("Lrange", 10, () => take(5, Lrange(10000000))) // Lrange: 0.05ms