export class TodoItem {
    id: number;
    task: string;
    complete = false;

    constructor(id: number, task: string, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }

    printDetails(): void {
        console.log(`${this.id}\t${this.task} ${this.complete
            ? "\t(complete)" : ""}`);
    }
}
