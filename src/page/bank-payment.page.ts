import { $, ElementFinder } from "protractor";

export class BankPaymentPage {
  private tShirtMenu: ElementFinder;

  constructor() {
    this.tShirtMenu = $('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.tShirtMenu.click();
  }
}
