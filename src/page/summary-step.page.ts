import { $, ElementFinder } from 'protractor'

export class SummaryStepPage {
  private tShirtMenu: ElementFinder

  constructor () {
    this.tShirtMenu = $('form #cart_navigation > button')
  }

  public async ConfirmMyOrder (): Promise<void> {
    await this.tShirtMenu.click()
  }
}
