// ES6에서의 리스트 순회
// ES5
const list = [1,2,3]
for(let i = 0; i< list.length; i++){
    console.log(list[i])
}

const str = "test";
for(let i = 0; i < str.length; i++){
    console.log(str[i])
}

// ES6
for(let a of list){
    console.log(a)
}

for(let s of str){
    console.log(s)
}

// Array 탐색
const arr = [1,2,3]
for(const a of arr){
    console.log(a)
}

// Set 탐색
const set = new Set([1,2,3])
for(const s of set){
    console.log(s)
}

//Map
const map = new Map([["a",1],["b",2],["c",3]])
for(const m of map){
    console.log(m)
}

for(const k of map.keys()){
    console.log(k)
}

for(const v of map.values()){
    console.log(v)
}

/**
 * Array의 경우, index 값으로 접근이 가능
 * arr[0] == 1
 * 
 * 하지만 Set과 Map의 경우, index 값으로 접근이 안된다.
 * 
 * Symbol => 어떤 객체의 키로 사용될 수 있다!!!
 * 
 * 
 * 리스트의 경우 Symbol.iterator 메소드를 가지고 있디
 * 
 * Symbol.iterator를 가지고 있는 것을 이터러블이라 명시하며 이터레이터를 반환한다.
 * 이터레이터는 {value, done} 형태의 객체를 리턴하는 next()를 가진 값을 나타낸다.
 * 
 * 따라서 for ...of 메소드는 이 이터러블 & 이터레이터 조합으로 만들어진 경우에 사용할 수 있다.
 */
