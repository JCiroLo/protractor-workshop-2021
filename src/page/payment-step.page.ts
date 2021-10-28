import { $, ElementFinder } from 'protractor'

export class PaymentStepPage {
  private emailInput: ElementFinder
  private passwdInput: ElementFinder
  private submitButton: ElementFinder

  constructor () {
    this.emailInput = $('#email')
    this.passwdInput = $('#passwd')
    this.submitButton = $('#SubmitLogin')
  }

  public async fillLoginForm (email, passwd): Promise<void> {
    await this.emailInput.sendKeys(email)
    await this.passwdInput.sendKeys(passwd)
    await this.submitButton.click()
  }
}
