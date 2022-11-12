// 평가 - 코드가 계산되어 값을 만드는 것
// 값 - 평가의 결과
const a = 3+5 // 평가 = 8

// 일급
/* 일급
- 값을 다룰 수 있다.
- 변수에 담을 수 있다.
- 함수의 인자로 사용될 수 있다.
- 함수의 결과로 사용될 수 있다.
*/

const a1 = 10;
const add10 = a => a+10

const result = add10(10)

console.log(result)

/*
결론 : 일급 함수란 함수를 값으로 다룰 수 있다는 의미
*/

// 고차함수란? : 함수를 값으로 다루는 함수

const apply1 = f => f(1);
const add2 = a => a+2;

const result2 = apply1(add2);
console.log(result2)

const times = (f, time) => {
    for(let i = 0; i < time; i++){
        f(i);
    }
}

times(console.log, 3)

// 결론 : 고차 함수는 함수를 받아와서 대신 실행시켜주는 함수!!

// 함수를 만들어주는 함수
const addMaker = a => b => a+b;
const add10_2 = addMaker(10)

console.log(add10_2(1))
