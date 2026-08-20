import { EmailObserver } from "./EmailObserver";
import { SmsObserver } from "./SmsObserver";
import { Stock } from "./Stock";

const stock = new Stock(100);
const emailObserver = new EmailObserver();
stock.addObserver(emailObserver);
const smsObserver = new SmsObserver();
stock.addObserver(smsObserver);
stock.changePrice(101);
stock.removeObserver(emailObserver);
stock.changePrice(102);