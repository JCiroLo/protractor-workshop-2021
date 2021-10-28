import { $, ElementFinder } from "protractor";

export class SignInStepPage {
  private tShirtMenu: ElementFinder;

  constructor() {
    this.tShirtMenu = $("#HOOK_PAYMENT > div:nth-child(1) > div > p > a");
  }

  public async PayByBankWire(): Promise<void> {
    await this.tShirtMenu.click();
  }
}
