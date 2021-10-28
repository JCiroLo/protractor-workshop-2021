import { $, ElementFinder } from 'protractor'

export class AddressStepPage {
  private tShirtMenu: ElementFinder

  constructor () {
    this.tShirtMenu = $(
      '#center_column a.button.ajax_add_to_cart_button.btn.btn-default'
    )
  }

  public async addToCart (): Promise<void> {
    await this.tShirtMenu.click()
  }
}
