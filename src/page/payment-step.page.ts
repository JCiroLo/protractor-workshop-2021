import { $, ElementFinder } from 'protractor'

export class PaymentStepPage {
  private emailInput: ElementFinder
  private passwdInput: ElementFinder
  private submitButton: ElementFinder

  constructor () {
    this.emailInput = $('.login_form #email')
    this.passwdInput = $('.login_form #passwd')
    this.submitButton = $('.login_form #SubmitLogin')
  }

  public async fillLoginForm (): Promise<void> {
    await this.emailInput.sendKeys('aperdomobo@gmail.com')
    await this.passwdInput.sendKeys('WorkshopProtractor')
    await this.submitButton.click()
  }
}
