import { OrderDataFetcher } from "./OrderDataFetcher";

export class MySqlOrderFetcher implements OrderDataFetcher {
    fetch(orderId: string): string[] {
        const rows = [`order:${orderId}`, "item:book", "item:pen"];
        console.log("MySQL: fetched order rows");
        return rows;
    }
}
