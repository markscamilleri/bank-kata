import {AccountService} from "../ports/accountService";
import {CalendarService} from "../ports/calendarService";
import {ConsoleService} from "../ports/consoleService";
interface Transaction{Date:string;
Amount:number;
Balance:number}

export class BankAccountService implements AccountService {
  private balance: number
  private calendar: CalendarService
  private console: ConsoleService
  private transactions: Transaction[] = []

  constructor(calendar: CalendarService, console: ConsoleService) {
    this.balance = 0;
    this.calendar = calendar;
    this.console = console;
  }

  deposit(amount: number): void {
    this.balance = this.balance + amount
    this.transactions.push({Date: this.calendar.now(), Amount:amount, Balance:this.balance})
  }

  printStatement(): void {
    this.console.print("Date       || Amount || Balance")
    this.transactions.forEach((transaction) =>{
      this.console.print(`${transaction.Date} || ${transaction.Amount} || ${transaction.Balance}`)
    })
  }

  withdraw(amount: number): void {
  }

}
