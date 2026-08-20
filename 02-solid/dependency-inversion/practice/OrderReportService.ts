import { OrderDataFetcher } from "./OrderDataFetcher";
import { ReportFormatter } from "./ReportFormatter";
import { ReportSender } from "./ReportSender";

export class OrderReportService {
    constructor(
        private fetcher: OrderDataFetcher,
        private sender: ReportSender,
    ) {}

    generateAndSend(orderId: string, formatter: ReportFormatter): void {
        const rows = this.fetcher.fetch(orderId);
        const body = formatter.format(rows);
        this.sender.send(body);
    }
}
