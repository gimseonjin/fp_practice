export class Utils {

    static curry = f => (a, ...args) => args.length ? f(a, ...args) : (...args) => f(a, ...args)

    static map = Utils.curry(function* (fn, iter) {
        for (const i of iter) yield fn(i);
    })

    static filter = Utils.curry(function* (fn, iter){
            for (const i of iter) if (fn(i)) yield i;
    })

    static reduce = Utils.curry((f, total, iter) => {
        if (!iter) {
            iter = total[Symbol.iterator]();
            total = iter.next().value;
        }

        for (const i of iter) total = f(total, i)
        return total
    })

    static go = (...funcs) => Utils.reduce((acc, f) => f(acc), funcs)

    static pipe = (f, ...funcs) => (...acc) => Utils.go(f(...acc), ...funcs)

    static range = function* (l) {
        for (let i = 0; i < l; i++)
            yield i
    }

    static take = (l, iter) => {
        const result = []
        for (const i of iter) {
            result.push(i)
            if (result.length == l)
                return result
        }
        return result
    }
}