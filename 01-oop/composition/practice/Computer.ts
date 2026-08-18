// Implement Computer + parts with composition (see ../EXERCISE.md)
class Computer {
    private cpu: Cpu;
    private memory: Memory;
    private disk: Disk;

    constructor(cpu: Cpu, memory: Memory, disk: Disk) {
        this.cpu = cpu;
        this.memory = memory;
        this.disk = disk;
    }

    boot(): string {
        const loaded = this.memory.load("os");
        const result = this.cpu.compute();
        const saved = this.disk.write(result);
        return `${loaded} → ${result} → ${saved}`;
    }
}

const cpu = new Cpu();
const memory = new Memory();
const disk = new Disk();
const computer = new Computer(cpu, memory, disk);
console.log(computer.boot());