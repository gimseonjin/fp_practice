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
