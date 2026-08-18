class Disk {
    read(data: string): string {
        return `Reading ${data}`;
    }

    write(data: string): string {
        return `Writing ${data}`;
    }
}