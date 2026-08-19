class HumanWorker implements Workable, Eatable, Sleepable {
    work(): void {
        console.log("HumanWorker is working");
    }
    eat(): void {
        console.log("HumanWorker is eating");
    }
    sleep(): void {
        console.log("HumanWorker is sleeping");
    }
}