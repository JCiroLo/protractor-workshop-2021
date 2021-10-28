import { $, ElementFinder } from "protractor";

export class BankPaymentPage {
  private tShirtMenu: ElementFinder;

  constructor() {
    this.tShirtMenu = $('#layer_cart > .button-container > a.button-medium');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.tShirtMenu.click();
  }
}
