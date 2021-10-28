import { $, ElementFinder } from 'protractor'

export class OrderSummaryPage {
  private tShirtMenu: ElementFinder

  constructor () {
    this.tShirtMenu = $('.cart_navigation a.standard-checkout')
  }

  public async proceedToCheckout (): Promise<void> {
    await this.tShirtMenu.click()
  }
}
