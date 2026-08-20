import { CsvFormatter } from "./CsvFormatter";
import { EmailReportSender } from "./EmailReportSender";
import { JsonFormatter } from "./JsonFormatter";
import { MySqlOrderFetcher } from "./MySqlOrderFetcher";
import { OrderReportService } from "./OrderReportService";

const reportService = new OrderReportService(
    new MySqlOrderFetcher(),
    new EmailReportSender(),
);

reportService.generateAndSend("42", new JsonFormatter());
reportService.generateAndSend("42", new CsvFormatter());
