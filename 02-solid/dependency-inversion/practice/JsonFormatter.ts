import { ReportFormatter } from "./ReportFormatter";

export class JsonFormatter implements ReportFormatter {
    format(rows: string[]): string {
        return JSON.stringify(rows);
    }
}
