const reduce = (f, total, iter) => {
    if(!iter){
        iter = total[Symbol.iterator]();
        total = iter.next().value;
    }

    for(const i of iter) total = f(total, i)
    return total
}

const go = (...funcs) => reduce((acc, f) => f(acc), funcs)

const result = go(1, a => a+1, a => a+2)

console.log(result)