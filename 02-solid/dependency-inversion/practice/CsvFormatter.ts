import { ReportFormatter } from "./ReportFormatter";

export class CsvFormatter implements ReportFormatter {
    format(rows: string[]): string {
        return rows.join(",");
    }
}
