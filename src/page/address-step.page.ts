import { $, ElementFinder } from 'protractor'

export class AddressStepPage {
  private tShirtMenu: ElementFinder

  constructor () {
    this.tShirtMenu = $(
      '#center_column > .product_list > li:nth-child(1) > a.button.ajax_add_to_cart_button.btn.btn-default'
    )
  }

  public async addToCart (): Promise<void> {
    await this.tShirtMenu.click()
  }
}
