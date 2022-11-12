export class Iterator{

    constructor(repo){
        this.repo = Array.from(repo);
        this.count = -1
    }

    next = () => {
        return {value: this.repo[++this.count], done: this.repo.length === this.count}
    }
}