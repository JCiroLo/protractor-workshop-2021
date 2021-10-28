import { $, ElementFinder } from 'protractor'

export class ProductListPage {
  private checkBox: ElementFinder
  private submitButton: ElementFinder

  constructor () {
    this.checkBox = $('#form > #cgv')
    this.submitButton = $('#form > .cart_navigation clearfix > .standard-checkout')
  }

  public async proceedToCheckout (): Promise<void> {
    await this.checkBox.click()
    await this.submitButton.click()
  }
}
