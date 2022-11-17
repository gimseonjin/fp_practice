export class Tool{

    static curry = f => (a, ...args) => args.length ? f(a, ...args) : (...args) => f(a, ...args)

    static map = Tool.curry((f, iter) => {
        const result = []

        for(const i of iter){
            result.push(f(i))
        }

        return result
    })

    static filter = Tool.curry((f, iter) => {
        const result = []
        for(const i of iter){
            if(f(i))
                result.push(i)
        }
        return result
    })

    static reduce = Tool.curry((f, total, iter) => {
        if(!iter){
            iter = total[Symbol.iterator]();
            total = iter.next().value;
        }

        for(const i of iter) total = f(total, i)
        return total
    })

    static go = (...funcs) => Tool.reduce((acc, f) => f(acc), funcs)

    static pipe = (f, ...funcs) => (...acc) => Tool.go(f(...acc), ...funcs)
}