export interface OrderDataFetcher {
    fetch(orderId: string): string[];
}
