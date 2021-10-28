import { $, ElementFinder } from 'protractor'

export class ProductListPage {
  private checkBox: ElementFinder
  private submitButton: ElementFinder

  constructor () {
    this.checkBox = $('#cgv')
    this.submitButton = $('#form > p > button')
  }

  public async proceedToCheckout (): Promise<void> {
    await this.checkBox.click()
    await this.submitButton.click()
  }
}
