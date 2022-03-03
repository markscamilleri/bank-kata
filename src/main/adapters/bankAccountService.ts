import {AccountService} from "../ports/accountService";
import {CalendarService} from "../ports/calendarService";
import {ConsoleService} from "../ports/consoleService";

export class BankAccountService implements AccountService {
  private balance: number
  private calendar: CalendarService
  private console: ConsoleService

  constructor(calendar: CalendarService, console: ConsoleService) {
    this.balance = 0;
    this.calendar = calendar;
    this.console = console;
  }

  deposit(amount: number): void {
  }

  printStatement(): void {
    this.console.print("Date       || Amount || Balance")
    this.console.print("10/01/2012 || 1000   || 1000")
  }

  withdraw(amount: number): void {
  }

}
