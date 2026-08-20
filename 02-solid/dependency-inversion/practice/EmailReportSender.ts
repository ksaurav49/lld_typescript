import { ReportSender } from "./ReportSender";

export class EmailReportSender implements ReportSender {
    send(body: string): void {
        console.log(`Email sent: ${body}`);
    }
}
