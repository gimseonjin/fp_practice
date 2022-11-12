import {OnlyEvenList} from "./evenList.js"

const onlyEvenList = new OnlyEvenList()
onlyEvenList.push(1)
onlyEvenList.push(2)
onlyEvenList.push(3)
onlyEvenList.push(4)
onlyEvenList.push(4)

for(const x of onlyEvenList) console.log(x)