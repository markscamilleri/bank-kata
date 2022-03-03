import {AccountService} from "../../main/ports/accountService";
import {BankAccountService} from "../../main/adapters/bankAccountService";
import {CalendarService} from "../../main/ports/calendarService";
import {ConsoleService} from "../../main/ports/consoleService";

describe("Bank Account Service", () => {
  const mockNow = jest.fn()
  const fakeCalendar: CalendarService = {
    now: mockNow
  }

  const mockPrint = jest.fn()
  const fakeConsole: ConsoleService = {
    print: mockPrint,
  }

  describe("Given a client has a bank account with £0", () => {
      let bankAccount: AccountService;

      beforeEach(() => {
        bankAccount = new BankAccountService(fakeCalendar, fakeConsole);
      })

      afterEach(() => {
        jest.resetAllMocks()
      })

      describe("And the client makes a deposit of £1000 on 10-01-2012", () => {
        beforeEach(() => {
          mockNow.mockReturnValue(new Date(2012, 1,10))
          bankAccount.deposit(1000)
        })

        describe("When the client prints their bank statement", () => {
          beforeEach(() => {
            bankAccount.printStatement()
          })

          it('should print a copy of the bank statement', () => {
            expect(mockPrint).toBeCalledWith(expect.stringMatching(/Date\s+\|\| Amount\s+\|\| Balance/))
            expect(mockPrint).toBeCalledWith(expect.stringMatching(/10\/01\/2012\s+\|\| 1000\s+\|\| 1000/))
          })
        })
      })
  })
})
