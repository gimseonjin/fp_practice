import {Iterator} from './iterator.js'

export class OnlyEvenList{

    constructor(){
        this.repo = new Set()
        this.count = -1
    }

    push(v){
        if(v % 2 == 0) this.repo.add(v)
    }

    [Symbol.iterator](){

        function *gen(repo) {
            for(const i of repo) 
                yield i
        }

        return gen(this.repo)
    }
}