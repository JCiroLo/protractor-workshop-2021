import { $, ElementFinder } from "protractor";

export class ProductAddedModalPage {
  private tShirtMenu: ElementFinder;

  constructor() {
    this.tShirtMenu = $("#center_column > form > p > button");
  }

  public async proceedToCheckout(): Promise<void> {
    await this.tShirtMenu.click();
  }
}
