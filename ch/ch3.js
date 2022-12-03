// 사용자 정의 이터러블

const iterable = {
    [Symbol.iterator]() {
        let i = 3;
        return {
            next(){
                return {value: i--, done: i === -1 }
            },
            [Symbol.iterator](){return this;}
        }
    }
}

for(const x of iterable) console.log(x)


const arr2 = [1,2,3]
for (const a of arr2) console.log(a)